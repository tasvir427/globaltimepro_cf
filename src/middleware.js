import { geolocation } from '@vercel/edge';
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*',
};

export async function middleware(req) {
  const geo = geolocation(req) || {};

  const response = NextResponse.next();

  response.cookies.set('user_city', geo?.city || '');

  return response;
}
