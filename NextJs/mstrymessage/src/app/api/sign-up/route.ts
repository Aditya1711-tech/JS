import dbConnect from "@/lib/bdConnect";
import UserModel from "@/model/User";
import bcryptjs from "bcryptjs";

import { sendVerificationEmail } from "@/helper/sendVerificationEmail";
import { signUpSchema } from "@/schemas/signUpSchema";

export async function POST(req: Request) {
  await dbConnect();

  try {
    const reqData = await req.json();

    // Validate user input using zod schema
    const validationResult = signUpSchema.safeParse(reqData);
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(
        (error) => error.message
      );
      return Response.json(
        { success: false, message: errors.join(", ") },
        { status: 400 }
      );
    }

    const { username, password, email } = reqData;

    const existingUserVerifiedByUserName = await UserModel.findOne({
      username,
      isVerified: true,
    });
    if (existingUserVerifiedByUserName) {
      return Response.json(
        {
          success: false,
          message: `Username: ${username} is already taken`,
        },
        {
          status: 400,
        }
      );
    }

    const existingUserByEmail = await UserModel.findOne({ email });

    const verifyCode = Math.floor(100000 + Math.random() * 90000).toString();
    if (existingUserByEmail) {
      if (existingUserByEmail.isVerified) {
        return Response.json(
          { success: false, message: "User already exists" },
          { status: 400 }
        );
      } else {
        const hasedPasswoed = await bcryptjs.hash(password, 10);
        const expiryDate = new Date();
        expiryDate.setHours(expiryDate.getHours() + 1);

        existingUserByEmail.password = hasedPasswoed;
        existingUserByEmail.verifyCode = verifyCode;
        existingUserByEmail.verifyCodeExpiry = expiryDate;
        await existingUserByEmail.save();
      }
    } else {
      const hasedPassword = await bcryptjs.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);

      const newUser = new UserModel({
        username,
        email,
        password: hasedPassword,
        verifyCode,
        verifyCodeExpiry: expiryDate,
        isVerified: false,
        isAcceptingMessage: true,
        messages: [],
      });

      await newUser.save();
    }

    // Send verification email
    const emailResponse = await sendVerificationEmail(
      email,
      username,
      verifyCode
    );

    if (!emailResponse.success) {
      return Response.json(
        { success: false, message: emailResponse.message },
        { status: 500 }
      );
    }
    return Response.json(
      {
        success: true,
        message: "User registered successfully, please verify your email",
      },
      { status: 201 }
    );
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
