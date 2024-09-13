import Tech from "@models/tech";
import { connectDB } from "@utils/database";

export const POST = async (request) => {
  const { userId, tech, keyword1, tag, roadmap } = await request.json();

  try {
    await connectDB();

    const newTech = new Tech({
      creator: userId,
      tech,
      keyword1,
      tag,
      roadmap,
    });

    await newTech.save();
    return new Response(JSON.stringify(newTech), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new tech keyword", { status: 500 });
  }
};
