import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/app/models/User";
import Payment from "@/app/models/Payment";
import connectDB from "@/app/db/connectdb";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === "github") {
        const email = user?.email || profile?.email;
        if (!email) return false;

        await connectDB();

        let currentUser = await User.findOne({ email });

        if (!currentUser) {
          currentUser = await User.create({
            email,
            username: email.split("@")[0],
            name: profile?.name || email.split("@")[0],
          });
        }

        user.name = currentUser.username;
        user.id = currentUser._id;
      }
      return true;
    },

    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.username;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
