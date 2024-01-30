import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import ImageContainer from "../ImageContainer";

const ListItem = styled(ReactCardFlip)`
  display: grid;
  grid-template-rows: 1fr 2fr;
  gap: 1rem;
  border: 1px solid red;
`;

const GridItemLinkBox = styled(Link)`
  text-decoration: none;
  color: black;
  /* border: 1px solid black; */

  &:hover {
    text-decoration: underline;
  }
`;

const IsLikedElement = styled.span`
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 5px;
  font-size: 10px;
`;

const CommentCounter = styled.span`
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 7px;
  font-size: 10px;
`;

export default function ArtPiecePreview({
  image,
  favorites,
  setFavorites,
  removeItem,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(true);

  function toggleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <ListItem isFlipped={isFlipped} flipDirection="horizontal">
      <div>
        <GridItemLinkBox href={`/art-pieces/${image.slug}`}>
          <h3>{image.name}</h3>
          <p>by {image.artist}</p>
          {commentCount > 0 && <CommentCounter>{commentCount}</CommentCounter>}
        </GridItemLinkBox>
        <button onClick={toggleFlip}>Click to flip</button>
      </div>
      <div>
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
        <button onClick={toggleFlip}>Click to flip</button>
      </div>
    </ListItem>
  );
}
