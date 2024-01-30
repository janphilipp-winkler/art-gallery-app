import { nanoid } from "nanoid";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import { List } from "@/components/StyledComponents";
import { useEffect } from "react";

export default function ArtPieces({
  pieces,
  setFavorites,
  favorites,
  removeItem,
}) {
  return (
    <List>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={nanoid()}
          image={piece}
          favorites={favorites}
          setFavorites={setFavorites}
          removeItem={removeItem}
        />
      ))}
    </List>
  );
}
