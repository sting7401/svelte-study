import { j as json } from "../../../../chunks/index.js";
import { c as comments } from "../../../../chunks/comments.js";
function GET() {
  return json(comments);
}
const POST = async ({ request }) => {
  const { text } = await request.json();
  const newComment = {
    id: comments.length + 1,
    text
  };
  comments.push(newComment);
  return json(newComment, { status: 201 });
};
export {
  GET,
  POST
};
