import styled from "styled-components";

const DetailsHeader = styled.h2`
  font-size: 4rem;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.$bgColorOne},
    ${(props) => props.$bgColorTwo},
    ${(props) => props.$bgColorThree}
  );
  background-clip: text;
  color: transparent;
`;

export default function ArtPieceDetailedInfo({ piece }) {
  const { name, year, artist, genre, dimensions, slug, colors } = piece;
  const { width, height, type } = dimensions;

  return (
    <>
      <DetailsHeader
        $bgColorOne={colors[0]}
        $bgColorTwo={colors[2]}
        $bgColorThree={colors[colors.length - 1]}
      >
        {name}
      </DetailsHeader>

      <p>
        This piece named <strong>&quot;{name}&quot;</strong> was created by{" "}
        <strong>{artist}</strong> in the year {year}. It is representative of
        the <strong>{genre}</strong> genre.
      </p>
      <p>
        Dimensions: {width} x {height} <br />
        Format: {"."}
        {type}
      </p>
    </>
  );
}
