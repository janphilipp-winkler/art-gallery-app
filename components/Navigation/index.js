import { MenuButton, NavLinks } from "../StyledComponents";
import styled from "styled-components";

const Svg = styled.svg`
  height: 25px;
  width: 25px;
`;

export default function Navigation() {
  return (
    <NavLinks>
      <MenuButton as="a" href={"/art-pieces"}>
        art pieces
      </MenuButton>
      <MenuButton as="a" href={"/favorites"}>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="shiny-red" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(255, 120, 220)", stopOpacity: 0.8 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(255, 0, 80)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
            fill={"url(#shiny-red)"}
          />
        </Svg>
      </MenuButton>
    </NavLinks>
  );
}
