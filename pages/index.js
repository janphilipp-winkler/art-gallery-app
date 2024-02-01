import Spotlight from "@/components/Spotlight";
import getRandomPicture from "@/lib/getRandomPicture";
import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function SpotlightPage({ pieces, favorites, setFavorites }) {
  const randomPiece = getRandomPicture(pieces);

  useEffect(() => {
    if (favorites === undefined) {
      const updatedFavorites = {};
      pieces.forEach((piece) => {
        const id = piece.slug;
        updatedFavorites[id] = false;
      });
      setFavorites(updatedFavorites);
    }
  }, []);

  return (
    <>
      <Spotlight image={randomPiece} />
      {/* <ColorPalette colors={randomPiece.colors} /> */}
    </>
  );
}
