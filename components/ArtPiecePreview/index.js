import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ListItem = styled.li`
  display: grid;
  grid-template-rows: 1fr 2fr;
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
    <Link href={`/art-pieces/${image.slug}`}>
      <ListItem>
        <div>
          <h2>{image.name}</h2>
          <p>{image.artist}</p>
          {isLiked && <span>&#128150;</span>}
          {commentCount > 0 && <span>{commentCount} comments</span>}
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
    </Link>
  );
}
