export const POST = async (request) => {
  try {
    const { token } = await request.json();

    if (!token) {
      return Response.json({ error: 'Token is required' }, { status: 400 });
    }

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify`;

    const formData = new URLSearchParams();
    formData.append('secret', process.env.RECAPTCHA_SECRET_KEY);
    formData.append('response', token);

    const response = await fetch(verificationUrl, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    const threshold = 0.5;

    if (data.success && data.score >= threshold) {
      return Response.json({
        success: true,
        score: data.score,
        action: data.action,
      });
    } else {
      return Response.json(
        {
          success: false,
          error: 'Verification failed',
          score: data.score,
          threshold,
          'error-codes': data['error-codes'],
        },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return Response.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 },
    );
  }
};
