import Tech from "@models/tech";
import { connectDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectDB()

        const techs = await Tech.find({}).populate('creator');
        console.log("Fetched techs from MongoDB:", techs); 
        return new Response(JSON.stringify(techs), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all keyword", { status: 500 })
    }
} 