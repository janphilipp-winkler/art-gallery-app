import Image from "next/image";

export default function ArtPieceDetails({ image }) {
  return (
    <>
      <Image
        src={image.imageSource}
        width={image.dimensions.width * 0.1}
        height={image.dimensions.height * 0.1}
        alt={image.name}
      ></Image>
      <p>{image.artist}</p>
    </>
  );
}
