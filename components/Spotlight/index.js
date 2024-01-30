import styled from "styled-components";
import { useState } from "react";
import { BackgroundImage } from "@/pages/art-pieces/[slug]";

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CalltoActionButton = styled.button`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  color: black;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  padding: 10px 20px;
`;

const CopyrightButton = styled(CalltoActionButton)`
  bottom: 20px;
`;

export default function Spotlight({ image }) {
  const [animationKey, setAnimationKey] = useState(0);
  return (
    <FlexCenter>
      <BackgroundImage
        key={animationKey}
        src={image.imageSource}
        loading="eager"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={`${image.name} - Artist: ${image.artist} - Year: ${image.year}`}
      ></BackgroundImage>
      <CalltoActionButton as="a" href={`/art-pieces/${image.slug}`}>
        This is image is from <strong>{image.artist}</strong>. <br></br>Do you
        want to see more?
      </CalltoActionButton>
      <CopyrightButton>
        <small>
          Made with ♥ by<br></br>Mareike, Bruno, Şevket & Jan-Philipp
        </small>
      </CopyrightButton>
    </FlexCenter>
  );
}
