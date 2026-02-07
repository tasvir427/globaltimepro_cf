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

    const verificationUrl =
      'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const params = new URLSearchParams();
    params.append('secret', env.TURNSTILE_SECRET_KEY || '');
    params.append('response', token);

    const resp = await fetch(verificationUrl, {
      method: 'POST',
      body: params,
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      console.error('Turnstile upstream error:', resp.status, text);
      return new Response(
        JSON.stringify({ success: false, error: 'Turnstile upstream error' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const data = await resp.json();

    if (data.success) {
      return new Response(
        JSON.stringify({
          success: true,
          action: data.action,
          cdata: data.cdata,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Verification failed',
        'error-codes': data['error-codes'],
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    console.error('Turnstile verification error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
