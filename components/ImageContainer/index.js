import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const DivContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
`;
const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  height: 35px; /* Adjust size as needed */
  width: 35px;
  margin: 0;
  padding: 0;
`;

const LinkBox = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0;
  padding: 0;
  width: 0px;
  height: 0px;
`;

export default function ImageContainer({
  href,
  id,
  src,
  alt,
  height,
  width,
  blur,
  blurDataURL,
  placeholder,
  favorites,
  setFavorites,
  opacity,
}) {
  function handleFavClick(id) {
    const newFavorites = { ...favorites };
    newFavorites[id] = !favorites[id];
    setFavorites(newFavorites);
  }
  return (
    <DivContainer>
      <LinkBox href={href ? `art-pieces/${href}` : "#"}>
        <Image
          id={id}
          src={src}
          alt={alt}
          height={height}
          width={width}
          blur={blur ? blur : ""}
          blurDataURL={blurDataURL ? blurDataURL : ""}
          placeholder={placeholder ? placeholder : ""}
          opacity={opacity ? opacity : "100%"}
        />
      </LinkBox>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        onClick={(event) => {
          handleFavClick(id);
        }}
      >
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
          fill={favorites[id] === true ? "url(#shiny-red)" : "white"}
          stroke={favorites[id] === true ? "" : "rgb(255, 120, 220)"}
          strokeWidth="0.4"
        />
      </Svg>
    </DivContainer>
  );
}
