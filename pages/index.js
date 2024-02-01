import { useImageIsLoadedStore } from "@/Store/ImageIsLoaded";
import Spotlight from "@/components/Spotlight";
import getRandomPicture from "@/lib/getRandomPicture";
import { useEffect } from "react";

export default function SpotlightPage({ pieces, favorites, setFavorites }) {
  const randomPiece = getRandomPicture(pieces);
  const loaded = useImageIsLoadedStore((state) => state.loaded);
  const handleImageIsLoaded = useImageIsLoadedStore(
    (state) => state.handleImageIsLoaded
  );
  const handleImageIsNotLoaded = useImageIsLoadedStore(
    (state) => state.handleImageIsNotLoaded
  );

  console.log(loaded);

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
      <button onClick={() => handleImageIsLoaded()}>true</button>
      <button onClick={() => handleImageIsNotLoaded()}>false</button>
    </>
  );
}
