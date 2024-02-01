import { useEffect, useState } from "react";
import { OverflowHidden, StyledBackgroundImage } from "../StyledComponents";

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
        fill
        alt={`${name} - Artist: ${artist} - Year: ${year}`}
      />{" "}
    </OverflowHidden>
  );
}
