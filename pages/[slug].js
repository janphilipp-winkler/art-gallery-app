import { nanoid } from "nanoid";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import { List } from "@/components/StyledComponents";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import Link from "next/link";

export default function ArtPieces({ pieces, setFavorites, favorites }) {
  const router = useRouter();
  const { slug } = router.query;

  const [likedPieces, setLikedPieces] = useState([]);

  useEffect(() => {
    const filteredPieces = pieces.filter((piece) => {
      return favorites[piece.slug] === true;
    });
    setLikedPieces(filteredPieces);
  }, [favorites]);

  if (slug === "art-pieces") {
    return (
      <List>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={nanoid()}
            image={piece}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </List>
    );
  }

  if (slug === "favorites") {
    if (likedPieces.length > 0) {
      return (
        <List>
          {likedPieces.map((piece) => (
            <>
              <ArtPiecePreview
                key={nanoid()}
                image={piece}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </>
          ))}
        </List>
      );
    } else {
      return (
        <h3>
          You have no favorite pictures yet, have a look at our{" "}
          <Link href="/art-pieces">art pieces</Link> and like some!
        </h3>
      );
    }
  } else {
    router.push("/");
  }
}
