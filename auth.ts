import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { writeClient } from "@/sanity/lib/writeClient";
import { client } from "@/sanity/lib/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      const githubIdStr = String(account?.providerAccountId);

      const existingUser = await client.fetch(
        `*[_type == "user" && githubId == $id][0]`,
        { id: githubIdStr }
      );

      if (!existingUser) {
        await writeClient.create({
          _type: "user",
          name: user.name,
          email: user.email,
          githubId: githubIdStr,
        });
      }

      return true;
    },

    async jwt({ token, account }) {
      if (account) {
        token.githubId = String(account.providerAccountId); // ✅ FIXED
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.githubId as string;
      }
      return session;
    },
  },
});