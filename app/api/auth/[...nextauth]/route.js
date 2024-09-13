import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectDB } from '@utils/database';
import User from "@models/user";
require('dotenv').config();


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }) {
      await connectDB();
      const sessionUser = await User.findOne({ email: session.user.email });
      
      if (sessionUser) {
        session.user.id = sessionUser._id.toString();
      }

      return session;  
    },

    async signIn({ account, profile, user, credentials }) {
      try {
        console.log("Profile:", profile); 
        await connectDB();  

        const userExist = await User.findOne({ email: profile.email });

        if (!userExist) {  
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
                return false;
              }
            },
          }
        })

export { handler as GET, handler as POST };
