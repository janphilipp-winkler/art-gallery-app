import { DetailsHeader } from "../StyledComponents";

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
