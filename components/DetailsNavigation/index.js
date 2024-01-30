import { Router } from "next/router";
import styled from "styled-components";

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

export default function DetailsNavigation({ showCommentCard, onNavigation }) {
  const goToNextPage = () => onNavigation("next");
  const goToPreviousPage = () => onNavigation("previous");

  return (
    <>
      <NavigationButton show={showCommentCard} onClick={goToPreviousPage}>
        {"⬅️"}
      </NavigationButton>
      <NavigationButton show={showCommentCard} onClick={goToNextPage} right>
        {"➡️"}
      </NavigationButton>
    </>
  );
}
