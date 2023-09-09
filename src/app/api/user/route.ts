import { db } from "@/lib/db";

export async function GET() {
  try {
    const user = await db.user.findFirst();
    console.log(user);

    return new Response("User found");
  } catch (error) {
    console.log(error);
    return new Response("User not found!");
  }
}
