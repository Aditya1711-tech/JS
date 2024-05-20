import { comments } from "../../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const filteredComments = comments.filter(
    (comment) => comment.id === Number(params.id)
  );
  return new Response(JSON.stringify(filteredComments), { status: 201 });
}
