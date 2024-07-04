import { NextResponse } from "next/server";

export async function GET() {
  const profileData = { name: "John Doe", age: 30 };
  return NextResponse.json(profileData);
}
