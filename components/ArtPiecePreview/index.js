import { useState } from "react";
import ImageContainer from "../ImageContainer";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import {
  ListItem,
  StyledCardBack,
  StyledDiv,
  StyledH3,
  StyledButton,
} from "../StyledComponents";

export default function ArtPiecePreview({
  image,
  favorites,
  setFavorites,
  removeItem,
}) {
  const [isLiked, setIsLiked] = useState(false);
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
