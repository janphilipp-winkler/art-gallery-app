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
