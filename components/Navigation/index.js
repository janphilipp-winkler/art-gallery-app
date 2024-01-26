import { NavLinks, StyledLink } from "../StyledComponents";

export default function Navigation() {
  return (
    <NavLinks>
      <StyledLink href={"/"}>Spotlight</StyledLink>
      <StyledLink href={"/art-pieces"}>Art Pieces</StyledLink>
      <StyledLink href={"/favorites"}>Favorites</StyledLink>
    </NavLinks>
  );
}
