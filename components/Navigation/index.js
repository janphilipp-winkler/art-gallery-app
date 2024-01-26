import Link from "next/link";
import styled from "styled-components";

const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <NavLinks>
      <StyledLink href={"/"}>Spotlight</StyledLink>
      <StyledLink href={"/art-pieces"}>Art Pieces</StyledLink>
      <StyledLink href={"/favorites"}>Favorites</StyledLink>
    </NavLinks>
  );
}
