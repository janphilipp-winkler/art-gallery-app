import ArtPieceDetailedInfo from "../ArtPieceDetailedInfo";
import ColorPalette from "../ColorPalette";
import CommentSection from "../CommentSection";
import DetailsCardHeader from "../DetailsCardHeader";
import {
  ContentWrapper,
  CommentCard,
  ImageInCommentCard,
} from "../StyledComponents";

export default function DetailsCard({
  pieceDetails,
  showCommentCard,
  onAddComment,
  favorites,
  setFavorites,
  comments,
  onShowCommentCard,
}) {
  const { colors, imageSource, dimensions, name, artist, year, slug } =
    pieceDetails;
  const { height, width } = dimensions;

  return (
    <CommentCard show={showCommentCard}>
      <DetailsCardHeader
        showCommentCard={showCommentCard}
        onShowCommentCard={onShowCommentCard}
        pieceDetails={pieceDetails}
      />
      <ContentWrapper>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ArtPieceDetailedInfo piece={pieceDetails} />
          <ColorPalette colors={colors} />
        </div>
        <div>
          <ImageInCommentCard
            id={slug}
            src={imageSource}
            height={height * 0.2}
            width={width * 0.2}
            alt={`${name} - Artist: ${artist} - Year: ${year}`}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </div>
      </ContentWrapper>
      <CommentSection
        pieceDetails={pieceDetails}
        onAddComment={onAddComment}
        comments={comments}
      />
    </CommentCard>
  );
}
