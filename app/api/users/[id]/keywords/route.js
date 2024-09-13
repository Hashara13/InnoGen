import Tech from "@models/tech";
import { connectDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    if (!params.id) {
      console.error("Missing creator ID parameter");
      return new Response("Creator ID is required", { status: 400 });
    }

    const techs = await Tech.find({ creator: params.id }).populate("creator");

    if (techs.length === 0) {
      console.log("No techs found for the given creator ID:", params.id);
    } else {
      console.log("Fetched techs from MongoDB:", techs);
    }

    return new Response(JSON.stringify(techs), { status: 200 });
  } catch (error) {
    console.error("Error fetching techs:", error);
    return new Response("Failed to fetch techs", { status: 500 });
  }
};
