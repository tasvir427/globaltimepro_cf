import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

export const POST = async (request) => {
  try {
    const { message, url, userAgent } = await request.json();

    if (!message || !message.trim()) {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    const sentFrom = new Sender(
      process.env.MAILERSEND_FROM_EMAIL,
      process.env.MAILERSEND_FROM_NAME || 'Feedback System',
    );

    const recipients = [
      new Recipient(process.env.MAILERSEND_TO_EMAIL, 'Feedback Recipient'),
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject('🚀 New Feedback Received').setText(`
New Feedback:
${message}

Context:
Page: ${url || 'Unknown'}
Time: ${new Date().toUTCString()}
User Agent: ${userAgent || 'Unknown'}
      `).setHtml(`
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2563eb;">🚀 New Feedback Received</h2>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <h3 style="margin: 0 0 10px 0; color: #1e293b;">Feedback Message:</h3>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>

          <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; font-size: 14px;">
            <p style="margin: 5px 0;"><strong>Page:</strong> ${
              url || 'Unknown'
            }</p>
            <p style="margin: 5px 0;"><strong>Time:</strong> ${new Date().toUTCString()}</p>
            <p style="margin: 5px 0;"><strong>User Agent:</strong> ${
              userAgent || 'Unknown'
            }</p>
          </div>
        </div>
      `);

    await mailerSend.email.send(emailParams);

    return Response.json(
      { success: true, message: 'Feedback sent successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('MailerSend error:', error);
    return Response.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 },
    );
  }
};
