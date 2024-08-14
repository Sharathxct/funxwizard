import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Twitter],

  callbacks: {
    async jwt(token, user, account = {}, profile, isNewUser) {
      console.log("abrakadabra :::: ", token);
      token.access_token = account.access_token;
      return token;
    }
  }


})
