import { CommentType, comments } from "../data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const requestData = await request.json();
  const newComment: CommentType = {
    id: comments.length + 1,
    text: requestData.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      contentType: "applocation/json",
    },
    status: 201,
  });
}
