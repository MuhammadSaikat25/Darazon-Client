import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/auth";

export async function middleware(request: NextRequest) {
  const user=await getCurrentUser()

  const url = request.nextUrl;

  if (url.pathname.startsWith("/admin")) {
    if (user?.role === "admin") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/registration", request.url));
    }
  }

  if (url.pathname.startsWith("/seller")) {
    if (user?.role === "seller") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/registration", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/seller/:path*"],
};
