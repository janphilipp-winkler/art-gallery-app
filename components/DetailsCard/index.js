import styled from "styled-components";
import ArtPieceDetailedInfo from "../ArtPieceDetailedInfo";
import ColorPalette from "../ColorPalette";
import CommentSection from "../CommentSection";
import ImageContainer from "../ImageContainer";
import DetailsCardHeader from "../DetailsCardHeader";

const CommentCard = styled.div`
  position: fixed;
  bottom: ${(props) => (props.show ? "0" : "-71.5vh")};
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  height: 80vh;
  transition: bottom 0.3s ease;
  overflow-y: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 0rem 2rem;
  width: 100%;
  padding: 30px;
  overflow: hidden;
  background-color: var(--btn-background);
`;

const ImageInCommentCard = styled(ImageContainer)`
  width: 100%;
  height: auto;
`;

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
