export async function onRequest(context) {
  const { request } = context;
  const city = request.cf?.city || '';

  return new Response(JSON.stringify({ success: true, city }));
}
