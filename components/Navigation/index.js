import { MenuButton, NavLinks, StyledLink } from "../StyledComponents";

export default function Navigation() {
  return (
    <NavLinks>
      <MenuButton as="a" href={"/art-pieces"}>
        art pieces
      </MenuButton>
      <MenuButton as="a" href={"/favorites"}>
        ❤️
      </MenuButton>
    </NavLinks>
  );
}
