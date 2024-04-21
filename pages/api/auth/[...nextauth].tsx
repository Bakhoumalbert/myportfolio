import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {

    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    theme: {
        logo: '/assets/images/profil.jpg',
    },
    providers: [
        GithubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        session({ session, user }) {
            session.user.id = user.id;
            session.user.image = user.image;
            return session;
        },
    },
};

export default NextAuth(authOptions);