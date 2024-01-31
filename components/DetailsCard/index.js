import styled from "styled-components";
import ArtPieceDetailedInfo from "../ArtPieceDetailedInfo";
import ColorPalette from "../ColorPalette";
import CommentSection from "../CommentSection";
import ImageContainer from "../ImageContainer";
import DetailsButton from "../DetailsButton";
import DetailsCardHeader from "../DetailsCardHeader";

const CommentCard = styled.div`
  position: fixed;
  bottom: ${(props) => (props.show ? "0" : "-69vh")};
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 80vh;
  background-color: white;
  transition: bottom 0.3s ease;
  overflow-y: auto;
  padding-bottom: 100px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 0rem 2rem;
  width: 100%;
  padding: 30px;
  overflow: hidden;
`;

const ImageInCommentCard = styled(ImageContainer)`
  width: 20px;
  height: auto;
`;

export default function DetailsCard({
  pieceDetails,
  showCommentCard,
  onAddComment,
  favorites,
  setFavorites,
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
        <div>
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
