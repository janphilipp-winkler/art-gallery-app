import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import DetailsNavigation from "@/components/DetailsNavigation";
import DetailsButton from "@/components/DetailsButton";
import DetailsCard from "@/components/DetailsCard";
import BackgroundImage from "@/components/BackgroundImage";

export default function Details({ pieces, favorites, setFavorites }) {
  const router = useRouter();
  const { slug } = router.query;

  const [pieceDetails, setPieceDetails] = useLocalStorageState("pieceDetails", {
    defaultValue: {
      comments: [],
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
      const storedComments = JSON.parse(localStorage.getItem(slug)) || [];
      const storedFavorite = favorites[slug];
      console.log(
        "comments: ",
        storedComments,
        "counter: ",
        storedComments.length,
        "isFavorite: ",
        storedFavorite
      );
      setPieceDetails((prevPieceDetails) => ({
        ...prevPieceDetails,
        ...currentImage,
        comments: storedComments,
        counter: storedComments.length,
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

  function handleAddComment(comment) {
    setPieceDetails((prevPieceDetails) => ({
      ...prevPieceDetails,
      comments: [comment, ...prevPieceDetails.comments],
      counter: prevPieceDetails.counter + 1,
    }));
  }

  function handleShowCommentCard() {
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
            />
          </div>
          <DetailsButton
            showCommentCard={showCommentCard}
            onShowCommentCard={handleShowCommentCard}
            pieceDetails={pieceDetails}
          />
          <DetailsNavigation
            showCommentCard={showCommentCard}
            onNavigation={handleNavigation}
          />
        </>
      )}
    </>
  );
}
