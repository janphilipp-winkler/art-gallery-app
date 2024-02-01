import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function CommentSection({
  pieceDetails,
  onAddComment,
  comments,
}) {
  // Initial state for current comments
  const [sortedComments, setSortedComments] = useState([]);

  // Update comments when new comment is added or slug pieceDetails changed

  useEffect(() => {
    let filteredComments = [];
    const piece = comments.find((item) => item.id === pieceDetails.slug);
    if (piece && piece.comments) {
      filteredComments = piece.comments;
    }
    setSortedComments(filteredComments);
  }, [comments, pieceDetails]);

  // Handle a new comment

  function handleSubmit(event) {
    event.preventDefault();
    // Get comment from form an store it with timestamp
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newComment = {
      text: data.commentText,
      timestamp: new Date().toISOString(),
    };
    // Add the new comment to the right entry in locale storage
    onAddComment(newComment, pieceDetails.slug);
    event.target.reset();
  }

  return (
    <div
      style={{
        backgroundColor: "var(--btn-background)",
        paddingBottom: "40px",
        padding: "30px",
      }}
    >
      <h2>Leave a comment!</h2>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          name="commentText"
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
    </div>
  );
}
