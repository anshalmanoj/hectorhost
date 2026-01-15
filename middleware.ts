import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (pathname.startsWith('/billing')) {
    const newPath = pathname.replace('/billing', '') || '/';
    const url = `https://billing.hector.host${newPath}${search}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/billing/:path*'],
};
