import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectDB } from '@utils/database';
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],

    async session({ session }) {
      await connectDB();
      const sessionUser = await User.findOne({ email: session.user.email });
      
      if (sessionUser) {
        session.user.id = sessionUser._id.toString();
      }

      return session;  // Make sure to return the session object
    },

    async signIn({ profile }) {
      try {
        await connectDB();  // Ensure the DB is connected before proceeding

        const userExist = await User.findOne({ email: profile.email });

        if (!userExist) {
          await User.create({
            email: profile.email,
            username: profile.name.toLowerCase(), // Updated to use profile.name
            image: profile.picture, // Use profile.picture for the image
          });
        }

        return true;
      } catch (error) {
        console.log("Error signing in:", error);
        return false;
      }
    
  }
});

export { handler as GET, handler as POST };
