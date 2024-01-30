import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const DivContainer = styled.div`
  position: relative;
  display: inline-block;
  width: max-content;
`;
const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  height: 35px; /* Adjust size as needed */
  width: 35px;
`;

const GridItemLinkBox = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
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
  isLiked,
  setIsLiked,
  favorites,
  setFavorites,
  removeItem,
}) {
  function handleFavClick(id) {
    const newFavorites = { ...favorites };
    newFavorites[id] = !favorites[id];
    setFavorites(newFavorites);
  }
  return (
    <DivContainer>
      <GridItemLinkBox href={href ? href : "#"}>
        <Image
          id={id}
          src={src}
          alt={alt}
          height={height}
          width={width}
          blur={blur ? blur : ""}
          blurDataURL={blurDataURL ? blurDataURL : ""}
          placeholder={placeholder ? placeholder : ""}
        />
      </GridItemLinkBox>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={favorites[id] === true ? "red" : "white"}
        onClick={(event) => {
          handleFavClick(id);
        }}
      >
        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
      </Svg>
    </DivContainer>
  );
}
