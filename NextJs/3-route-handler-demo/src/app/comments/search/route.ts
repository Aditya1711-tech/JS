import { NextRequest } from "next/server";
import { comments } from "../data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return new Response(JSON.stringify(filteredComments), { status: 201 });
}
