import Navigation from "../Navigation";
import { H1, MenuButton, NavLinks } from "../StyledComponents";
import styled from "styled-components";
import { StyledLink } from "../StyledComponents";

const ContentWrapper = styled.div`
  display: flex;

  justify-content: space-between;
`;

export default function Layout({ children }) {
  return (
    <>
      <ContentWrapper>
        <NavLinks>
          <MenuButton as="a" href={"/"}>
            <strong>ART GALLERY</strong>
          </MenuButton>
        </NavLinks>
        <Navigation />
      </ContentWrapper>
      {children}
    </>
  );
}

// {/* <StyledLink href={"/"}>{/* <H1>Art Gallery</H1> */}</StyledLink> */}
