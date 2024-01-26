import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ListItem = styled.li`
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

export default function ArtPiecePreview({ image }) {
  return (
    <Link href={`/art-pieces/${image.slug}`}>
      <ListItem>
        <div>
          <h2>{image.name}</h2>
          <p>{image.artist}</p>
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
