import styled from "styled-components";
import ToggleFavorite from "../ToggleFavorite";
import ArtPieceDetailedInfo from "../ArtPieceDetailedInfo";
import ColorPalette from "../ColorPalette";
import CommentSection from "../CommentSection";
import ImageContainer from "../ImageContainer";

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

const ImageInCommentCard = styled(ImageContainer)`
  width: 20px;
  height: auto;
`;

export default function DetailsCard({
  pieceDetails,
  showCommentCard,
  onToggleFavorite,
  onAddComment,
  favorites,
  setFavorites,
}) {
  const {
    isFavorite,
    colors,
    imageSource,
    dimensions,
    name,
    artist,
    year,
    slug,
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
          <ArtPieceDetailedInfo piece={pieceDetails} />
          <p>
            <ColorPalette colors={colors} />
          </p>
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
      <CommentSection onAddComment={onAddComment} pieceDetails={pieceDetails} />
    </CommentCard>
  );
}
