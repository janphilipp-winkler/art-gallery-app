import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NavigationButton } from "../StyledComponents";
import { useImageHasLoadedStore } from "@/Store/ImageIsLoaded";

export default function DetailsNavigation({ showCommentCard, onNavigation }) {
  const { handleImageHasNotLoaded } = useImageHasLoadedStore();
  const goToNextPage = () => {
    onNavigation("next");
    handleImageHasNotLoaded();
  };
  const goToPreviousPage = () => {
    onNavigation("previous");
    handleImageHasNotLoaded();
  };

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
