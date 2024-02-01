import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ArrowDownward } from "@mui/icons-material";
import { Header } from "../StyledComponents";

export default function DetailsCardHeader({
  showCommentCard,
  onShowCommentCard,
  pieceDetails,
}) {
  const { name, comments, counter, isFavorite } = pieceDetails;

  return (
    <Header onClick={onShowCommentCard}>
      <div style={{ alignSelf: "center" }}></div>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        {showCommentCard === true ? (
          <h5 style={{ padding: 0, margin: 0 }}></h5>
        ) : (
          <h5 style={{ padding: 0, margin: 0, marginTop: "6px" }}> {name}</h5>
        )}
      </div>
      {showCommentCard === true ? <ArrowDownward /> : <ArrowUpwardIcon />}
    </Header>
  );
}
