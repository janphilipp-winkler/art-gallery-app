import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import ImageContainer from "../ImageContainer";

// ArtPieceDetailedInfo

export const DetailsHeader = styled.h2`
  font-size: 4rem;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.$bgColorOne},
    ${(props) => props.$bgColorTwo},
    ${(props) => props.$bgColorThree}
  );
  background-clip: text;
  color: transparent;
  margin: 0;
  padding: 0;
`;

// ArtPiecePreview

export const ListItem = styled(ReactCardFlip)`
  display: grid;
  grid-template-rows: 1fr 2fr;
  gap: 1rem;
  border: 1px solid red;
`;

export const StyledDiv = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledH3 = styled.h3`
  margin-top: 0;
`;

export const StyledCardBack = styled.div`
  position: relative;
  min-height: ${(props) => props.$image.dimensions.height * 0.1}px;
  min-width: ${(props) => props.$image.dimensions.width * 0.1}px;
  overflow: hidden;
  padding-bottom: 25px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("${(props) => props.$image.imageSource}");
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.2;
    z-index: -1;
    transform: scaleX(-1);
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 5px;
  background-color: white;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 50%;
`;

// BackgroundImage

const zoomIn = keyframes`
  0% {
    transform: scale(1.2);
    overflow: hidden;
  }
  100% {
    transform: scale(1);
    overflow: hidden;
  }
`;

export const StyledBackgroundImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${(props) => (props.$show ? "blur(50px)" : "blur(0px)")};
  animation: ${zoomIn} 0.5s linear;
  display: ${(props) => (props.$loaded ? "block" : "none")};
`;

export const OverflowHidden = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

// DetailsCard

export const CommentCard = styled.div`
  position: fixed;
  bottom: ${(props) => (props.show ? "0" : "-71.5vh")};
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  height: 80vh;
  transition: bottom 0.3s ease;
  overflow-y: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 0rem 2rem;
  width: 100%;
  padding: 30px;
  overflow: hidden;
  background-color: var(--btn-background);
`;

export const ImageInCommentCard = styled(ImageContainer)`
  width: 100%;
  height: auto;
`;

// DetailsCardHeader

export const Header = styled.div`
  position: sticky;
  top: 0%;
  left: 0%;
  height: 65px;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding-top: 10px;
  background-color: var(--btn-background);
  backdrop-filter: blur(5px);
  padding: 10px;
`;

// DetailsNavigation

export const NavigationButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: ${(props) => (props.right ? "auto" : "20px")};
  right: ${(props) => (props.right ? "20px" : "auto")};
  padding: 10px 20px;
  background-color: var(--btn-background);
  color: black;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  z-index: 1000;
  display: grid;
  place-items: center;
  backdrop-filter: blur(5px);
`;

// ImageContainer

export const DivContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
`;
export const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  width: 30px;
  margin: 0;
  padding: 0;
`;

export const LinkBox = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0;
  padding: 0;
  width: 0px;
  height: 0px;
`;

// Layout

export const ContentWrapp = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  margin: 2rem;
`;

// Navigtion

export const NavHeart = styled.svg`
  height: 25px;
  width: 25px;
`;

export const MenuButton = styled.button`
  background-color: var(--btn-background);
  color: black;
  border: none;
  border-radius: 20px;
  padding: 0.5em 1em;
  display: grid;
  place-items: center;
  text-decoration: none;
  backdrop-filter: blur(5px);
`;

// Spotlight

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const CalltoActionButton = styled.button`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--btn-background);
  color: black;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  text-decoration: none;
  backdrop-filter: blur(5px);
`;

export const CopyrightButton = styled(CalltoActionButton)`
  bottom: 20px;
  text-align: center;
`;

// [slug]

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 0;
  margin: 2rem;
  gap: 1rem;
`;

// ColorPallette

export const PalletteList = styled.ul`
  padding: 0;
  margin: 0 auto;
  list-style: none;
  display: flex;
  width: 10rem;
  border: 2px solid black;
  border-radius: 5px;
`;

export const PaletteItem = styled.li`
  height: 3rem;
  width: 3rem;
  background-color: ${(prop) => prop.color};
`;
