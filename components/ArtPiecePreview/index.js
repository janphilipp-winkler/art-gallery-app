import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ListItem = styled.li`
  display: grid;
  grid-template-rows: 1fr 2fr;
  gap: 1rem;
`;

const GridItemLinkBox = styled(Link)`
  text-decoration: none;
  color: black;

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

export default function ArtPiecePreview({ image }) {
  const [isLiked, setIsLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const isLiked = JSON.parse(localStorage.getItem(`favorite_${image.slug}`));
    setIsLiked(isLiked);
    const value = JSON.parse(localStorage.getItem(image.slug)) || {};
    setCommentCount(value.length);
  }, [image.slug]);

  return (
    <GridItemLinkBox href={`/art-pieces/${image.slug}`}>
      <ListItem>
        <div style={{ width: 200 }}>
          <h3>{image.name}</h3>
          <p>by {image.artist}</p>
          {isLiked && <IsLikedElement>♥</IsLikedElement>}
          {commentCount > 0 && <CommentCounter>{commentCount}</CommentCounter>}
        </div>
        <Image
          src={image.imageSource}
          alt={image.name}
          height={image.dimensions.height * 0.1}
          width={image.dimensions.width * 0.1}
          blurDataURL={image.imageSource}
          placeholder="blur"
        />
      </ListItem>
    </GridItemLinkBox>
  );
}
