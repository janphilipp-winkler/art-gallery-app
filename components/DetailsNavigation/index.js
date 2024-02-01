import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const NavigationButton = styled.button`
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
`;

export default function DetailsNavigation({ showCommentCard, onNavigation }) {
  const goToNextPage = () => onNavigation("next");
  const goToPreviousPage = () => onNavigation("previous");

  return (
    <>
      <NavigationButton
        show={showCommentCard}
        onClick={goToPreviousPage}
        left={"true"}
      >
        <KeyboardArrowLeftIcon />
      </NavigationButton>
      <NavigationButton
        show={showCommentCard}
        onClick={goToNextPage}
        right={"true"}
      >
        <KeyboardArrowRightIcon />
      </NavigationButton>
    </>
  );
}
