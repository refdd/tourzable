import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGlE_CLIENT_ID,
      clientSecret: process.env.GOOGlE_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
});
