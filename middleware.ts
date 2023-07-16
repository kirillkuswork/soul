import { NextResponse, NextRequest } from 'next/server';
import ROUTES from './src/data/routes';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname === ROUTES.purchaseTerms.root + ROUTES.purchaseTerms.cashBack) {
        const absoluteUrl = new URL(ROUTES.purchaseTerms.root + ROUTES.purchaseTerms.fullPayment, request.nextUrl);
        return NextResponse.redirect(absoluteUrl.toString());
    }

    if (pathname === ROUTES.purchaseTerms.plainRoot || pathname === ROUTES.purchaseTerms.root) {
        const absoluteUrl = new URL(ROUTES.purchaseTerms.root + ROUTES.purchaseTerms.mortgage, request.nextUrl);
        return NextResponse.redirect(absoluteUrl.toString());
    }

    return NextResponse.next();
}
