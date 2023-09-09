import { db } from "@/lib/db";
import { redis } from "@/lib/redis";

export async function GET() {
  try {
    const cachedValue = await redis.get("User Name");
    if (cachedValue) {
      return new Response(cachedValue);
    }

    const user = await db.user.findFirst();

    if (!user) return new Response("Error");

    await redis.set("User Name", JSON.stringify(user));

    return new Response(JSON.stringify(user));
  } catch (error) {
    // console.log(error);
    return new Response("User not found!");
  }
}
