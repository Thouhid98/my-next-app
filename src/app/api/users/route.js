import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectToDatabase();

    console.log("Connected to MongoDB:", db.databaseName);

    const users = await db.collection("users").find({}).toArray();

    console.log("Fetched users:", users);

    return NextResponse.json(users);
  } catch (error) {
    console.error("MongoDB API Error:", error);
    return NextResponse.json({ error: "Failed To fetch" }, { status: 500 });
  }
}
