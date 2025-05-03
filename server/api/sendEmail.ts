import sgMail from '@sendgrid/mail';

/** INTERFACES */
import { ITurnstileVerificationResponse } from '@/server/ts/interfaces/TurnstileVerificationResponse';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const runtimeConfig = useRuntimeConfig();

    console.log(
      'runtimeConfig.SENDGRID_API_KEY',
      runtimeConfig.SENDGRID_API_KEY,
    );

    sgMail.setApiKey(
      runtimeConfig.SENDGRID_API_KEY,
      runtimeConfig.RECEIVER_EMAIL,
    );

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

    const msg = {
      to: [{ email: runtimeConfig.RECEIVER_EMAIL || '' }],
      from: {
        email: runtimeConfig.RESEND_SENDER || '',
        name: 'Formularz kontaktowy',
      },
      subject: 'Formularz kontaktowy',
      text: `
        Imię i nazwisko: ${nameAndSurname}
        Firma: ${company || ''}
        Email: ${email}
        Numer telefonu: ${phoneNumber || ''}
        Wiadomość: ${message}
      `,
    };

    await sgMail.send(msg);

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
