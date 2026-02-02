export async function onRequestPost({ request, env }) {
  try {
    const { message, url, userAgent } = await request.json();

    if (!message || !message.trim()) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const MAILER_API = 'https://api.mailersend.com/v1/email';
    const fromEmail = env.MAILERSEND_FROM_EMAIL;
    const fromName = env.MAILERSEND_FROM_NAME || 'Feedback System';
    const toEmail = env.MAILERSEND_TO_EMAIL;

    if (!env.MAILERSEND_API_KEY || !fromEmail || !toEmail) {
      console.error('MailerSend environment variables missing');
      return new Response(
        JSON.stringify({ error: 'Mail service not configured' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    const textBody = `New Feedback:\n${message}\n\nContext:\nPage: ${url || 'Unknown'}\nTime: ${new Date().toUTCString()}\nUser Agent: ${userAgent || 'Unknown'}`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #2563eb;">🚀 New Feedback Received</h2>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
          <h3 style="margin: 0 0 10px 0; color: #1e293b;">Feedback Message:</h3>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(message)}</p>
        </div>

        <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; font-size: 14px;">
          <p style="margin: 5px 0;"><strong>Page:</strong> ${escapeHtml(url || 'Unknown')}</p>
          <p style="margin: 5px 0;"><strong>Time:</strong> ${escapeHtml(new Date().toUTCString())}</p>
          <p style="margin: 5px 0;"><strong>User Agent:</strong> ${escapeHtml(userAgent || 'Unknown')}</p>
        </div>
      </div>
    `;

    const payload = {
      from: { email: fromEmail, name: fromName },
      to: [{ email: toEmail, name: 'Feedback Recipient' }],
      subject: '🚀 New Feedback Received',
      text: textBody,
      html: htmlBody,
    };

    const resp = await fetch(MAILER_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.MAILERSEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const errText = await resp.text().catch(() => '');
      console.error('MailerSend API error', resp.status, errText);
      return new Response(
        JSON.stringify({ error: 'Failed to send email. Please try again.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Feedback sent successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (err) {
    console.error('send-feedback error:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to send email. Please try again.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}

// small helper to avoid injecting raw HTML from user input
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
