import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import ToggleFavorite from "@/components/ToggleFavorite";
import ArtPieceDetailedInfo from "@/components/ArtPieceDetailedInfo";
import ColorPalette from "@/components/ColorPalette";
import CommentSection from "@/components/CommentSection";
import useLocalStorageState from "use-local-storage-state";
import DetailsNavigation from "@/components/DetailsNavigation";

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

const DetailsButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  color: black;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 999;
`;

const CommentCounter = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 7px;
  font-size: 10px;
`;

const CommentCard = styled.div`
  position: fixed;
  bottom: ${(props) => (props.show ? "0" : "-100%")};
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 80vh;
  background-color: white;
  padding: 30px;
  transition: bottom 0.3s ease;
  overflow-y: auto;
  /* background-color: #e3e3e3; */
  padding-bottom: 100px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 0rem 2rem;
  /* border: 1px solid black; */
  width: 100%;
  overflow: hidden;
  /* margin-top: 40px; */
`;

const ImageInCommentCard = styled(Image)`
  width: 100%;
  height: auto;
`;

export default function Details({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const [pieceDetails, setPieceDetails] = useLocalStorageState("pieceDetails", {
    defaultValue: {
      comments: [],
      isFavorite: false,
    },
  });

  console.log(pieceDetails);

  const [showCommentCard, setShowCommentCard] = useState(false);

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
      const storedFavorite = JSON.parse(
        localStorage.getItem(`favorite_${slug}`)
      );
      setPieceDetails((prevPieceDetails) => ({
        ...prevPieceDetails,
        ...currentImage,
        slug: currentImage,
        comments: storedComments,
        counter: storedComments.length,
        isFavorite: storedFavorite || false,
      }));
    }
  }, [slug, pieces]);

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

  const handleToggleFavorite = (event) => {
    setPieceDetails((prevPieceDetails) => ({
      ...prevPieceDetails,
      isFavorite: event.target.checked,
    }));
    localStorage.setItem(
      `favorite_${slug}`,
      JSON.stringify(event.target.checked)
    );
  };

  return (
    <>
      {pieceDetails.slug && (
        <>
          <BackgroundImage
            key={animationKey}
            show={showCommentCard}
            src={pieceDetails.slug.imageSource}
            loading="eager"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={`${pieceDetails.slug.name} - Artist: ${pieceDetails.slug.artist} - Year: ${pieceDetails.slug.year}`}
          />{" "}
          <CommentCard show={showCommentCard}>
            <ContentWrapper>
              <div>
                <ToggleFavorite
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={pieceDetails.isFavorite}
                />
                <ArtPieceDetailedInfo piece={pieceDetails.slug} />
                <p>
                  <ColorPalette colors={pieceDetails.slug.colors} />
                </p>
              </div>
              <div>
                <ImageInCommentCard
                  src={pieceDetails.slug.imageSource}
                  height={pieceDetails.slug.dimensions.height * 0.2}
                  width={pieceDetails.slug.dimensions.width * 0.2}
                  alt={`${pieceDetails.slug.name} - Artist: ${pieceDetails.slug.artist} - Year: ${pieceDetails.slug.year}`}
                />
              </div>
            </ContentWrapper>
            <CommentSection
              onAddComment={handleAddComment}
              pieceDetails={pieceDetails}
            />
          </CommentCard>
          <DetailsButton
            show={showCommentCard}
            onClick={() => setShowCommentCard(!showCommentCard)}
          >
            {showCommentCard
              ? `${pieceDetails.slug.name} ⬇️`
              : `${pieceDetails.slug.name} ⬆️`}
            {pieceDetails.comments.length > 0 && (
              <CommentCounter>{pieceDetails.counter}</CommentCounter>
            )}
            {pieceDetails.isFavorite === true && (
              <CommentCounter style={{ right: -20 }}>♥</CommentCounter>
            )}
          </DetailsButton>
          <DetailsNavigation
            showCommentCard={showCommentCard}
            onNavigation={handleNavigation}
          />
        </>
      )}
    </>
  );
}
