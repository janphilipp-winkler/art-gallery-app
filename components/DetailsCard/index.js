import styled from "styled-components";
import ToggleFavorite from "../ToggleFavorite";
import ArtPieceDetailedInfo from "../ArtPieceDetailedInfo";
import ColorPalette from "../ColorPalette";
import CommentSection from "../CommentSection";

const CommentCard = styled.div`
  position: fixed;
  bottom: ${(props) => (props.show ? "0" : "-100%")};
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 80vh;
  background-color: white;
  padding: 30px;
  transition: bottom 0.3s ease;
  overflow-y: auto;
  /* background-color: #e3e3e3; */
  padding-bottom: 100px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 0rem 2rem;
  /* border: 1px solid black; */
  width: 100%;
  overflow: hidden;
  /* margin-top: 40px; */
`;

const ImageInCommentCard = styled(Image)`
  width: 100%;
  height: auto;
`;

export default function DetailsCard({
  pieceDetails,
  showCommentCard,
  onToggleFavorite,
}) {
  const {
    isFavorite,
    slug,
    colors,
    imageSource,
    dimensions,
    name,
    artist,
    year,
  } = pieceDetails;
  const { height, width } = dimensions;

  return (
    <CommentCard show={showCommentCard}>
      <ContentWrapper>
        <div>
          <ToggleFavorite
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
          <ArtPieceDetailedInfo piece={slug} />
          <p>
            <ColorPalette colors={colors} />
          </p>
        </div>
        <div>
          <ImageInCommentCard
            src={imageSource}
            height={height * 0.2}
            width={width * 0.2}
            alt={`${name} - Artist: ${artist} - Year: ${year}`}
          />
        </div>
      </ContentWrapper>
      <CommentSection
        onAddComment={handleAddComment}
        pieceDetails={pieceDetails}
      />
    </CommentCard>
  );
}
