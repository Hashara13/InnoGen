import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import {connectDB} from '@utils/database'
import User from "@models/user";

console.log({
    clientId:process.env.GOOGLE_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
}
    
)

const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){
        const sessionUser=await User.findOne({
            email:session.user.email
        });
        session.user.id=sessionUser._id.toString();
    },


    async signIn({profile}){

try{
    const userExist=await User.findOne({
        email:profile.email
    });
    if(!userExist){
    await User.create({
        email:profile.email,
        username: profile.username.toLowerCase(),
        image:profile.image
    })
    }
    await connectDB();
    return true;

}catch(error){
    console.log(error)
    return false;
}
    }
})
export {handler as GET,handler as POST}