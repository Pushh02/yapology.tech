import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const response = NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });
    response.cookies.delete('token');
    return response;
  } catch (error) {
    return NextResponse.json({ message: 'Failed to logout' }, { status: 500 });
  }
}