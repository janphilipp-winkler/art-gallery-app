import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import useLocalStorageState from "use-local-storage-state";
import DetailsNavigation from "@/components/DetailsNavigation";
import DetailsButton from "@/components/DetailsButton";
import DetailsCard from "@/components/DetailsCard";

const zoomIn = keyframes`
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const BackgroundImage = styled(Image)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  filter: ${(props) => (props.show ? "blur(50px)" : "blur(0px)")};
  animation: ${zoomIn} 0.5s linear;
`;

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

  // animationKey is a climbing number that gets updated every time image changes, then gets attached to the image component, which rerenders and the animation gets called once again
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (pieceDetails.slug) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [pieceDetails.slug]);

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

  const { name, artist, year } = pieceDetails;

  return (
    <>
      {pieceDetails.slug && (
        <>
          <BackgroundImage
            key={animationKey}
            show={showCommentCard}
            src={pieceDetails.imageSource}
            loading="eager"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={`${name} - Artist: ${artist} - Year: ${year}`}
          />{" "}
          <>
            <DetailsCard
              pieceDetails={pieceDetails}
              showCommentCard={showCommentCard}
              onAddComment={handleAddComment}
              favorites={favorites}
              setFavorites={setFavorites}
              onShowCommentCard={handleShowCommentCard}
            />
          </>
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
