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
  margin: 0;
  padding: 0;
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
      <h5 style={{ margin: 0, padding: 0, marginTop: "20px" }}>Year: {year}</h5>
      <h5 style={{ margin: 0, padding: 0 }}>Artist: {artist}</h5>
      <h5 style={{ margin: 0, padding: 0 }}>Genre: {genre}</h5>
      <h5 style={{ margin: 0, padding: 0 }}>
        Dimensions: {width} x {height}
      </h5>
      <h5 style={{ margin: 0, padding: 0 }}>
        Format: {"."}
        {type}
      </h5>
    </>
  );
}
