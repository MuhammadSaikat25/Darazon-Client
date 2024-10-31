import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    signIn: async ({ profile }) => {
      try {
        if (!profile) return false;
        const { email, name } = profile;

        const res = await fetch(`${process.env.SERVER}/singIn`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name }),
        });
        const data = await res.json();
        if (data?.data.jwtToken) {
          cookies().set("jwt",data?.data.jwtToken)
          console.log(data?.data.jwtToken);
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/registration",
  },
});

export { handler as GET, handler as POST };
