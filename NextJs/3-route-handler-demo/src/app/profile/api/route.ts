import { NextResponse } from "next/server";

export async function GET() {
  const profileData = { name: "Aditya Kaneriya", age: 21 };
  return NextResponse.json(profileData);
}
