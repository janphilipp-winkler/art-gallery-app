import { useEffect, useState } from "react";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import { List } from "@/components/StyledComponents";
import { nanoid } from "nanoid";

export default function Favorites({
  pieces,
  favorites,
  setFavorites,
  removeItem,
}) {
  const [likedPieces, setLikedPieces] = useState([]);

  useEffect(() => {
    // Filter pieces array based on local storage
    const filteredPieces = pieces.filter((piece) => {
      return favorites[piece.slug] === true;
    });

    setLikedPieces(filteredPieces);
  }, [favorites]);

  console.log(likedPieces);

  return (
    <List>
      {likedPieces.map((piece) => (
        <>
          <ArtPiecePreview
            key={nanoid()}
            image={piece}
            favorites={favorites}
            setFavorites={setFavorites}
            removeItem={removeItem}
          />
        </>
      ))}
    </List>
  );
}
