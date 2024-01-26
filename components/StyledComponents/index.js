import styled from "styled-components";
import Link from "next/link";

export const H1 = styled.h1`
  text-align: center;
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0;
`;
