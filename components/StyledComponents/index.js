import styled from "styled-components";
import Link from "next/link";

export const H1 = styled.h1`
  text-align: start;
  font-size: 1rem;
  padding: 0;
  margin: 2rem;
`;

export const NavLinks = styled.nav`
  display: flex;
  /* justify-content: left; */
  gap: 2rem;
  margin: 2rem;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 0;
  margin: 2rem;
  gap: 1rem;
`;

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
