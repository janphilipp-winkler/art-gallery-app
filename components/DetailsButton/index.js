import styled from "styled-components";

const StyledDetailsButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  color: black;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 999;
`;

const CommentCounter = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 7px;
  font-size: 10px;
`;

export default function DetailsButton({
  showCommentCard,
  onShowCommentCard,
  pieceDetails,
}) {
  const { name, comments, counter, isFavorite } = pieceDetails;

  return (
    <StyledDetailsButton show={showCommentCard} onClick={onShowCommentCard}>
      {showCommentCard ? `${name} ⬇️` : `${name} ⬆️`}
      {/* {comments.length > 0 && <CommentCounter>{counter}</CommentCounter>} */}
      {isFavorite === true && (
        <CommentCounter style={{ right: -20 }}>♥</CommentCounter>
      )}
    </StyledDetailsButton>
  );
}
