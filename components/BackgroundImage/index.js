import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const OverflowHidden = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const zoomIn = keyframes`
  0% {
    transform: scale(1.2);
    overflow: hidden;
  }
  100% {
    transform: scale(1);
    overflow: hidden;
  }
`;

export const StyledBackgroundImage = styled(Image)`
  width: 100%;
  height: 100%;
  filter: ${(props) => (props.show ? "blur(50px)" : "blur(0px)")};
  animation: ${zoomIn} 0.5s linear;
`;

export default function BackgroundImage({ pieceDetails, showCommentCard }) {
  // animationKey is a climbing number that gets updated every time image changes, then gets attached to the image component, which rerenders and the animation gets called once again
  const [animationKey, setAnimationKey] = useState(0);
  const { name, artist, year, imageSource } = pieceDetails;

  useEffect(() => {
    if (pieceDetails.slug) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [pieceDetails.slug]);
  return (
    <OverflowHidden>
      <StyledBackgroundImage
        key={animationKey}
        show={showCommentCard}
        src={imageSource}
        loading="eager"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={`${name} - Artist: ${artist} - Year: ${year}`}
      />{" "}
    </OverflowHidden>
  );
}
