import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // When COMING_SOON=true (set in main/production), show only the coming soon page
  const isComingSoon = process.env.COMING_SOON === "true";

  if (!isComingSoon) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow the coming-soon page and static assets
  if (pathname.startsWith("/coming-soon")) {
    return NextResponse.next();
  }
  if (pathname.startsWith("/_next") || pathname.startsWith("/img") || pathname.startsWith("/animation")) {
    return NextResponse.next();
  }
  if (pathname === "/favicon.ico" || pathname.startsWith("/favicon")) {
    return NextResponse.next();
  }

  // Rewrite all other requests to coming-soon
  return NextResponse.rewrite(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
