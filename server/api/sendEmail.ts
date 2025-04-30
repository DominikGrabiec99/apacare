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

    if (
      !nameAndSurname ||
      !phoneNumber ||
      !email ||
      !message ||
      !turnstileToken
    ) {
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
      host: runtimeConfig.SMTP_HOST,
      port: Number(runtimeConfig.SMTP_PORT),
      secure: runtimeConfig.SMTP_SECURE === 'true',
      auth: {
        user: runtimeConfig.SMTP_USER,
        pass: runtimeConfig.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Formularz kontaktowy" <${runtimeConfig.SMTP_USER}>`,
      to: runtimeConfig.RECEIVER_EMAIL,
      subject: 'Nowa wiadomość ze strony',
      text: `
        Imię i nazwisko: ${nameAndSurname}
        Firma: ${company || ''}
        Email: ${email}
        Numer telefonu: ${phoneNumber}
        Wiadomość: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Wiadomość wysłana pomyślnie.');
  } catch (error) {
    console.error('Błąd przy wysyłaniu wiadomości:', error);
    throw createError({
      statusCode: 500,
      statusMessage: `Błąd: ${error}`,
    });
  }

  return { success: true };
});
