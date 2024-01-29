import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const zoomIn = keyframes`
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const BackgroundImage = styled(Image)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  filter: ${(props) => (props.show ? "blur(50px)" : "blur(0px)")};
  animation: ${zoomIn} 0.5s linear;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 900;
  background-color: white;
  border-radius: 40px;
  padding: 0px 20px;
  opacity: 70%;
`;

const CommentButton = styled.button`
  position: absolute;
  top: 20px;
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

const NavigationButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: ${(props) => (props.right ? "auto" : "20px")};
  right: ${(props) => (props.right ? "20px" : "auto")};
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  cursor: pointer;
  z-index: 1000;
`;

const CommentCard = styled.div`
  position: fixed;
  bottom: ${(props) => (props.show ? "0" : "-70%")};
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 80vh;
  background-color: white;
  padding: 40px;
  transition: bottom 0.3s ease;
  overflow-y: auto;
  z-index: 999;
`;

export default function Details({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const [comments, setComments] = useState([]);
  const [commentCounter, setCommentCounter] = useState(0);

  const [pieceDetails, setPieceDetails] = useState({
    comments: [],
  });

  const [showCommentCard, setShowCommentCard] = useState(false);
  const [commentText, setCommentText] = useState("");

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
      setPieceDetails((prevPieceDetails) => ({
        ...prevPieceDetails,
        slug: currentImage,
        comments: storedComments,
        counter: storedComments.length,
      }));
    }
  }, [slug, pieces]);

  // navigation stuff

  function handleNavigation(direction) {
    const currentIndex = pieces.findIndex((piece) => piece.slug === slug);
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % pieces.length
        : (currentIndex - 1 + pieces.length) % pieces.length;
    router.push(`/art-pieces/${pieces[nextIndex].slug}`);
  }

  const goToNextPage = () => handleNavigation("next");
  const goToPreviousPage = () => handleNavigation("previous");

  //comment stuff

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = {
      text: commentText,
      timestamp: new Date().toISOString(),
    };

    const updatedComments = [newComment, ...pieceDetails.comments];

    setPieceDetails((prevPieceDetails) => ({
      ...prevPieceDetails,
      comments: updatedComments,
      counter: prevPieceDetails.counter + 1,
    }));
    localStorage.setItem(slug, JSON.stringify(pieceDetails.comments));
    setCommentText(""); // reset input field
  }

  // is needed to update the input field while typing

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const sortedComments = pieceDetails.comments.slice().sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

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
          />
          <TitleWrapper>
            <h1 style={{ fontSize: 20 }}>{pieceDetails.slug.name}</h1>
          </TitleWrapper>

          <CommentCard show={showCommentCard}>
            <div style={{ marginTop: 40 }}>
              <div>
                <input type="checkbox" id="favorite"></input>
                <label htmlFor="favorite">Fav</label>
              </div>
              {/* <ArtPieceDetails image={image} /> */}
              <Image
                src={pieceDetails.slug.imageSource}
                height={pieceDetails.slug.dimensions.height * 0.06}
                width={pieceDetails.slug.dimensions.width * 0.06}
                alt={`${pieceDetails.slug.name} - Artist: ${pieceDetails.slug.artist} - Year: ${pieceDetails.slug.year}`}
              />
              <h2>{pieceDetails.slug.name}</h2>
              <p>Artist: {pieceDetails.slug.artist}</p>
              <p>Year: {pieceDetails.slug.year}</p>
              <p>Genre: {pieceDetails.slug.genre}</p>
              <p>
                Dimensions: {pieceDetails.slug.dimensions.width} x{" "}
                {pieceDetails.slug.dimensions.height} {"/ "}
              </p>
              <p>
                Format: {"."}
                {pieceDetails.slug.dimensions.type}
              </p>
              <p>
                Colors:{" "}
                {pieceDetails.slug.colors.map((color) => (
                  <span key={color} style={{ backgroundColor: color }}>
                    {color}
                  </span>
                ))}
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={commentText}
                onChange={handleCommentChange}
                placeholder="Add a comment..."
                required
              />
              <button type="submit">Comment</button>
            </form>
            <div>
              {sortedComments.map((comment, index) => (
                <div key={index}>
                  <p>"{comment.text}"</p>
                  <p>
                    {new Date(comment.timestamp).toLocaleString("de-GE", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
              ))}
            </div>

            <CommentButton
              show={showCommentCard}
              onClick={() => setShowCommentCard(!showCommentCard)}
            >
              {showCommentCard ? "Hide Comments" : "Show Comments"}
              {pieceDetails.comments.length > 0 && (
                <CommentCounter>{pieceDetails.counter}</CommentCounter>
              )}
            </CommentButton>
          </CommentCard>
          <NavigationButton show={showCommentCard} onClick={goToPreviousPage}>
            {"<"}
          </NavigationButton>
          <NavigationButton show={showCommentCard} onClick={goToNextPage} right>
            {">"}
          </NavigationButton>
        </>
      )}
    </>
  );
}
