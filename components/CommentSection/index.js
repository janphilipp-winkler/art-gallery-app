import { nanoid } from "nanoid";

export default function CommentSection({ onAddComment, pieceDetails }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newComment = {
      text: data.commentText,
      timestamp: new Date().toISOString(),
    };
    onAddComment(newComment);
    event.target.reset();
  }

  const sortedComments = pieceDetails.comments.slice().sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="commentText"
          //onChange={handleCommentChange}
          placeholder="Add a comment..."
          required
        />
        <button type="submit">Comment</button>
      </form>
      <div>
        {sortedComments.map((comment) => (
          <div key={nanoid}>
            <p>"{comment.text}"</p>
            <p>
              {new Date(comment.timestamp).toLocaleString("de-GE", {
                dateStyle: "short",
                timeStyle: "short",
              })}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
