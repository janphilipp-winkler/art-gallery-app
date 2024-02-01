import { useState } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import ImageContainer from "../ImageContainer";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";

const ListItem = styled(ReactCardFlip)`
  display: grid;
  grid-template-rows: 1fr 2fr;
  gap: 1rem;
  border: 1px solid red;
`;

const StyledDiv = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 5px;
  background-color: white;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 50%;
`;

const CommentCounter = styled.span`
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 7px;
  font-size: 10px;
`;

const StyledH3 = styled.h3`
  margin-top: 0;
`;

const StyledCardBack = styled.div`
  position: relative;
  min-height: ${(props) => props.$image.dimensions.height * 0.1}px;
  min-width: ${(props) => props.$image.dimensions.width * 0.1}px;
  overflow: hidden;
  padding-bottom: 25px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("${(props) => props.$image.imageSource}");
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.2;
    z-index: -1;
    transform: scaleX(-1);
  }
`;

export default function ArtPiecePreview({
  image,
  favorites,
  setFavorites,
  removeItem,
}) {
  const [isLiked, setIsLiked] = useState(false);
  // const [commentCount, setCommentCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(true);

  function toggleFlip() {
    setIsFlipped(!isFlipped);
  }
  return (
    <ListItem isFlipped={isFlipped} flipDirection="horizontal">
      <StyledDiv>
        <StyledCardBack $image={image}>
          <StyledH3>{image.name}</StyledH3>
          <p>Artist: {image.artist}</p>
          <p>Year: {image.year}</p>
          <p>Genre: {image.genre}</p>
          {/* {commentCount > 0 && <CommentCounter>{commentCount}</CommentCounter>} */}
        </StyledCardBack>
        <StyledButton onClick={toggleFlip}>
          <RotateLeftIcon />
        </StyledButton>
      </StyledDiv>
      <StyledDiv>
        <ImageContainer
          href={image.slug}
          id={image.slug}
          src={image.imageSource}
          alt={image.name}
          height={image.dimensions.height * 0.1}
          width={image.dimensions.width * 0.1}
          blurDataURL={image.imageSource}
          placeholder="blur"
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          favorites={favorites}
          setFavorites={setFavorites}
          removeItem={removeItem}
        />
        <StyledButton onClick={toggleFlip}>
          <RotateRightIcon />
        </StyledButton>
      </StyledDiv>
    </ListItem>
  );
}
