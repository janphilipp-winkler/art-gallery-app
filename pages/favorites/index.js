import { useEffect, useState } from "react";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import { List } from "@/components/StyledComponents";
import { nanoid } from "nanoid";

export default function Favorites({ pieces }) {
  const [likedPieces, setLikedPieces] = useState([]);

  useEffect(() => {
    // Filter pieces array based on local storage
    const filteredPieces = pieces.filter((piece) => {
      const isLiked = localStorage.getItem(`favorite_${piece.slug}`);
      return isLiked === "true";
    });

    setLikedPieces(filteredPieces);
  }, [pieces]);

  console.log(likedPieces);

  return (
    <List>
      {likedPieces.map((piece) => (
        <>
          <ArtPiecePreview key={nanoid()} image={piece} />
        </>
      ))}
    </List>
  );
}
