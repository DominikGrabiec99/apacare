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

    const transporter = nodemailer.createTransport({
      host: runtimeConfig.smpt.host,
      port: Number(runtimeConfig.smpt.port),
      secure: runtimeConfig.smpt.secure === 'true',
      auth: {
        user: runtimeConfig.smpt.user,
        pass: runtimeConfig.smpt.password,
      },
    });

    const mailOptions = {
      from: `"Formularz Kontaktowy" <klienta>`,
      to: runtimeConfig.smpt.user,
      subject: 'Nowa wiadomość z formularza kontaktowego',
      text: `
        Imię i nazwisko: ${nameAndSurname}
        Firma: ${company || ''}
        Email: ${email}
        Numer telefonu: ${phoneNumber || ''}
        Wiadomość: ${message}
    `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Błąd przy wysyłaniu wiadomości:', error);
    throw createError({
      statusCode: 500,
      statusMessage: `Błąd: ${error}`,
    });
  }

  return { success: true };
});
