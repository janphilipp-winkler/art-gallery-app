import ColorPalette from "@/components/ColorPalette";
import Spotlight from "@/components/Spotlight";
import getRandomPicture from "@/lib/getRandomPicture";

export default function SpotlightPage({ pieces }) {
  const randomPiece = getRandomPicture(pieces);

  return (
    <>
      <Spotlight image={randomPiece} />
      <ColorPalette colors={randomPiece.colors} />
    </>
  );
}
