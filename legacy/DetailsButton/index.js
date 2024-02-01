import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledDetailsButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--btn-background);
  color: black;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 999;
`;

const FlexCenter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
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
      {showCommentCard ? (
        <FlexCenter>
          {name} <KeyboardArrowDownIcon />
        </FlexCenter>
      ) : (
        <FlexCenter>
          {name} <KeyboardArrowUpIcon />{" "}
        </FlexCenter>
      )}
      {comments.length > 0 && <CommentCounter>{counter}</CommentCounter>}
      {isFavorite === true && (
        <CommentCounter style={{ right: -20 }}>♥</CommentCounter>
      )}
    </StyledDetailsButton>
  );
}
