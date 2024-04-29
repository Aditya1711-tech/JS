import { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const jwtToken = request.cookies.get("token")?.value || "";
    const decodedToken: any = Jwt.verify(jwtToken, process.env.TOKEn_SECRET!);
    return decodedToken.id;
  } catch (error: any) {
    return new Error(error.message);
  }
};
