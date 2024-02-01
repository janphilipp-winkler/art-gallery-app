import Navigation from "../Navigation";
import { MenuButton, NavLinks, ContentWrapp } from "../StyledComponents";

export default function Layout({ children }) {
  return (
    <>
      <ContentWrapp>
        <NavLinks>
          <MenuButton as="a" href={"/"}>
            <strong>ART GALLERY</strong>
          </MenuButton>
        </NavLinks>
        <Navigation />
      </ContentWrapp>
      {children}
    </>
  );
}
