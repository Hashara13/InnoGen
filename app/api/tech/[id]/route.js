import Tech from "@models/tech";
import { connectDB } from "@utils/database";
import { ObjectId } from "mongodb";

// export const GET = async (request, { params }) => {
//     try {
//         await connectDB()

//         const tech = await Tech.findById(params.id).populate("creator")
//         if (!prompt) return new Response("tech Not Found", { status: 404 });

//         return new Response(JSON.stringify(tech), { status: 200 })

//     } catch (error) {
//         return new Response("Internal Server Error", { status: 500 });
//     }
// }
export const GET = async (request, { params }) => {
    try {
        await connectDB();

        const tech = await Tech.findById(params.id).populate("creator");
        if (!tech) return new Response("Tech Not Found", { status: 404 });

        return new Response(JSON.stringify(tech), { status: 200 });
    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
};

export const PATCH = async (request, { params }) => {
    const { keyword1, tag ,roadmap,tech} = await request.json();

    try {
        await connectDB()
        const existingTech = await Tech.findById(params.id);

        if (!existingTech) {
            return new Response("Tech not found", { status: 404 });
        }

        existingTech.keyword1 = keyword1;
        existingTech.tag = tag;
        existingTech.roadmap = roadmap;
        existingTech.tech = tech;

        await existingTech.save();

        return new Response("Successfully updated the tech", { status: 200 });
    } catch (error) {
        return new Response("Error Updating tech", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectDB()
        const tech = await Tech.findById(params.id);
        if (!tech) {
          return new Response("Tech not found", { status: 404 });
        }
    
        await tech.remove();
    
        return new Response("Tech deleted successfully", { status: 200 });
      } catch (error) {
        console.error("Error deleting Tech:", error);
        return new Response("Error deleting Tech", { status: 500 });
      }
    };