import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token');

  if (token) {
    const decodedToken = await verifyToken(token.value);
    if (!decodedToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (request.nextUrl.pathname !== '/login' && request.nextUrl.pathname !== '/signup') {
      return NextResponse.redirect(new URL('/home', request.url));
    }
  }

  if (!token && request.nextUrl.pathname !== '/login' && request.nextUrl.pathname !== '/signup') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/home', '/profile', '/settings', '/logout'],
};