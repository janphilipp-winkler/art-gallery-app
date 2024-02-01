import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import DetailsNavigation from "@/components/DetailsNavigation";
import DetailsButton from "@/legacy/DetailsButton";
import DetailsCard from "@/components/DetailsCard";
import BackgroundImage from "@/components/BackgroundImage";

export default function Details({ pieces, favorites, setFavorites }) {
  const router = useRouter();
  const { slug } = router.query;

  const [pieceDetails, setPieceDetails] = useLocalStorageState("pieceDetails", {
    defaultValue: {
      isFavorite: false,
    },
  });

  const [showCommentCard, setShowCommentCard] = useState(false);
  const cardRef = useRef(null);

  // handles closing of DetailsCard when clicking outside of it

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowCommentCard(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // useEffect gets slug, finds corresponding image, finds corresponding comments, counts them and updates the CommentCounter

  useEffect(() => {
    if (slug) {
      const currentImage = pieces.find((piece) => piece.slug === slug);
      const storedFavorite = favorites[slug];
      console.log("isFavorite: ", storedFavorite);
      setPieceDetails((prevPieceDetails) => ({
        ...prevPieceDetails,
        ...currentImage,
        isFavorite: storedFavorite,
      }));
    }
  }, [slug, pieces, favorites]);

  function handleNavigation(direction) {
    const currentIndex = pieces.findIndex((piece) => piece.slug === slug);
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % pieces.length
        : (currentIndex - 1 + pieces.length) % pieces.length;
    router.push(`/art-pieces/${pieces[nextIndex].slug}`);
  }

  //comment stuff

  const initialComments = pieces.map((piece) => {
    return { id: piece.slug, comments: [] };
  });
  console.log("mareike: ", initialComments);

  const [comments, setComments, { removeItem, isPersistent }] =
    useLocalStorageState("comments", {
      defaultValue: initialComments,
    });

  // Function to update state with new comment

  const handleAddComment = (comment, pictureId) => {
    const updatedPieces = comments.map((piece) => {
      if (piece.id === pictureId) {
        return {
          ...piece,
          comments: [comment, ...piece.comments],
        };
      }
      return piece;
    });
    setComments(updatedPieces);
  };

  function handleShowCommentCard() {
    console.log("click");
    setShowCommentCard(!showCommentCard);
  }

  return (
    <>
      {pieceDetails.slug && (
        <>
          <BackgroundImage
            pieceDetails={pieceDetails}
            showCommentCard={showCommentCard}
          />
          <div ref={cardRef}>
            <DetailsCard
              pieceDetails={pieceDetails}
              showCommentCard={showCommentCard}
              onAddComment={handleAddComment}
              favorites={favorites}
              setFavorites={setFavorites}
              onShowCommentCard={handleShowCommentCard}
              comments={comments}
            />
          </div>
          {/* <DetailsButton
            showCommentCard={showCommentCard}
            onShowCommentCard={handleShowCommentCard}
            pieceDetails={pieceDetails}
          /> */}
          <DetailsNavigation
            showCommentCard={showCommentCard}
            onNavigation={handleNavigation}
          />
        </>
      )}
    </>
  );
}
