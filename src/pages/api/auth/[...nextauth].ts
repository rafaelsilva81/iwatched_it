import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import prisma from "../../../lib/prisma";

export const authOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID as string,
      clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
      issuer: process.env.AUTH0_ISSUER as string,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
