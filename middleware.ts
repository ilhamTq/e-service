// export { default } from "next-auth/middleware";

import { authOptions } from '@/lib/authOptions';
import withAuth from 'next-auth/middleware';

export default withAuth({
    jwt: { decode: authOptions.jwt?.decode },
    callbacks: {
        authorized: ({ token }) => !!token,
    },
    pages: {
        signIn: '/login',
        error: '/error',
    },
});

export const config = {
    matcher: [
        // "/((?!api|_next/static|_next/image|images|favicon.ico).*)"
        '/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)',
    ],
};
