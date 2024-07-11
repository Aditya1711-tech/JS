import dbConnect from "@/lib/bdConnect";
import UserModel from "@/model/User";
import bcryptjs from "bcryptjs";

import { sendVerificationEmail } from "@/helper/sendVerificationEmail";

export async function POST(req: Request) {
  await dbConnect();

  try {
  } catch (error) {
    console.log("Error registering user", error);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
      },
      {
        status: 500,
      }
    );
  }
}
