export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const token = body?.token;

    if (!token) {
      return new Response(JSON.stringify({ error: 'Token is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const params = new URLSearchParams();
    params.append('secret', env.RECAPTCHA_SECRET_KEY || '');
    params.append('response', token);

    const resp = await fetch(verificationUrl, {
      method: 'POST',
      body: params,
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      console.error('reCAPTCHA upstream error:', resp.status, text);
      return new Response(
        JSON.stringify({ success: false, error: 'reCAPTCHA upstream error' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const data = await resp.json();
    const threshold = 0.5;

    if (data.success && (data.score ?? 0) >= threshold) {
      return new Response(
        JSON.stringify({
          success: true,
          score: data.score,
          action: data.action,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Verification failed',
          score: data.score,
          threshold,
          'error-codes': data['error-codes'],
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }
  } catch (err) {
    console.error('reCAPTCHA verification error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
