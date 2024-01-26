import Image from "next/image";
import styled from "styled-components";

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default function Spotlight({ image }) {
  return (
    <FlexCenter>
      <Image
        src={image.imageSource}
        width={image.dimensions.width * 0.1}
        height={image.dimensions.height * 0.1}
        alt={image.name}
      ></Image>
      <p>{image.artist}</p>
    </FlexCenter>
  );
}
