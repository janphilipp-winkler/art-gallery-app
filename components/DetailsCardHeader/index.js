import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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
  background-color: blue;
  color: white;
  border-radius: 50%;
  padding: 4px 6px;
  font-size: 10px;
  margin-left: 4px;
`;

const Header = styled.div`
  position: sticky;
  top: 0%;
  left: 0%;
  height: 82px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid black;
  z-index: 999;
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding-top: 10px;
`;

export default function DetailsCardHeader({
  showCommentCard,
  onShowCommentCard,
  pieceDetails,
}) {
  const { name, comments, counter, isFavorite } = pieceDetails;

  return (
    <Header>
      <div style={{ alignSelf: "center" }}></div>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <p style={{ padding: 0, margin: 0 }}>{name}</p>
        {/* {comments.length > 0 && <CommentCounter>{counter}</CommentCounter>}
        {isFavorite === true && (
          <CommentCounter style={{ padding: "4px 5px" }}>♥</CommentCounter>
        )} */}
      </div>
      {showCommentCard === true ? (
        <CloseIcon onClick={onShowCommentCard} />
      ) : (
        <ArrowUpwardIcon onClick={onShowCommentCard} />
      )}
      {/* <button show={showCommentCard} onClick={onShowCommentCard}> */}
      {/* <CloseIcon show={showCommentCard} onClick={onShowCommentCard} /> */}
      {/* {showCommentCard ? `⬇️` : `⬆️`}
      </button> */}
    </Header>
  );
}

{
  /* <StyledDetailsButton show={showCommentCard} onClick={onShowCommentCard}>
{showCommentCard ? `${name} ⬇️` : `${name} ⬆️`}
{comments.length > 0 && <CommentCounter>{counter}</CommentCounter>}
{isFavorite === true && (
  <CommentCounter style={{ right: -20 }}>♥</CommentCounter>
)}
</StyledDetailsButton> */
}
