import { c as comments } from "../../../../../chunks/comments.js";
import { j as json } from "../../../../../chunks/index.js";
const GET = ({ params }) => {
  const { commentId } = params;
  const comment = comments.find(
    (comment2) => comment2.id = parseInt(commentId)
  );
  return json(comment);
};
const PATCH = async ({ params, request }) => {
  const { commentId } = params;
  const { text } = await request.json();
  const comment = comments.find(
    (comment2) => comment2.id = parseInt(commentId)
  );
  comment.text = text;
  return json(comment);
};
const DELETE = async ({ params }) => {
  const { commentId } = params;
  const delComment = comments.find(
    (comment) => comment.id = parseInt(commentId)
  );
  const index = comments.findIndex(
    (comment) => comment.id = parseInt(commentId)
  );
  comments.splice(index, 1);
  return json(delComment);
};
export {
  DELETE,
  GET,
  PATCH
};
