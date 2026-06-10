import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const ADMIN_GITHUB_ID = process.env.ADMIN_GITHUB_ID;

export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // ✅ Not logged in — redirect to signin
  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // ✅ Logged in but not admin — redirect to home
  if (token.githubId !== ADMIN_GITHUB_ID) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // ✅ only protect /admin routes
};