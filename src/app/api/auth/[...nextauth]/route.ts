import NextAuth from "next-auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_ID ??
        (() => {
          throw new Error("GOOGLE_ID is not defined");
        })(),
      clientSecret:
        process.env.GOOGLE_SECRET ??
        (() => {
          throw new Error("GOOGLE_SECRET is not defined");
        })(),
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      // Add `username` and `uid` to session.user
      if (session.user) {
        session.user.username = session.user?.name
          ?.split(" ")
          .join("")
          .toLocaleLowerCase();
        session.user.uid = token.sub;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
