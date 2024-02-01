import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NavigationButton } from "../StyledComponents";

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
