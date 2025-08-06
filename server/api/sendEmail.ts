import nodemailer from 'nodemailer';

/** INTERFACES */
import { ITurnstileVerificationResponse } from '@/server/ts/interfaces/TurnstileVerificationResponse';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const runtimeConfig = useRuntimeConfig();

    const {
      nameAndSurname,
      email,
      phoneNumber,
      message,
      company,
      turnstileToken,
    } = body;

    if (!nameAndSurname || !email || !message || !turnstileToken) {
      throw createError({ statusCode: 400, statusMessage: 'Brakuje danych.' });
    }

    const secretKey = runtimeConfig.turnstile.secretKey;

    if (!secretKey) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Brak klucza sekretnego Turnstile.',
      });
    }

    const verificationRes: ITurnstileVerificationResponse = await $fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: new URLSearchParams({
          secret: secretKey,
          response: turnstileToken,
        }).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    if (!verificationRes.success) {
      console.error(
        'Turnstile verification failed:',
        verificationRes['error-codes'],
      );
      throw createError({
        statusCode: 403,
        statusMessage: 'Weryfikacja Turnstile nieudana.',
      });
    }

    const response = await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${runtimeConfig.resend.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: {
        from: runtimeConfig.resend.sender,
        to: [runtimeConfig.resend.email],
        subject: 'Nowa wiadomość z formularza kontaktowego',
        text: `
          Imię i nazwisko: ${nameAndSurname}
          Firma: ${company || ''}
          Email: ${email}
          Telefon: ${phoneNumber || ''}
          Wiadomość: ${message}
        `,
      },
    });

    // await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, response }), {
      status: 200,
    });
  } catch (error) {
    console.error('Błąd przy wysyłaniu wiadomości:', error);
    throw createError({
      statusCode: 500,
      statusMessage: `Błąd: ${error}`,
    });
  }

  return { success: true };
});
