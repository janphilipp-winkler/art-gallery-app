import { nanoid } from "nanoid";

export default function CommentSection({
  pieceDetails,
  onAddComment,
  comments,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newComment = {
      text: data.commentText,
      timestamp: new Date().toISOString(),
    };
    onAddComment(newComment, pieceDetails.slug);
    event.target.reset();
  }

  const sortedComments = comments.filter((piece) => {
    piece.id === pieceDetails.slug;
  });

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
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
            <p>{comment.text}</p>
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
