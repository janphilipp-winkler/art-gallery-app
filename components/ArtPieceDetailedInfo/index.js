export default function ArtPieceDetailedInfo({ piece }) {
  const { name, year, artist, genre, dimensions, slug } = piece;
  const { width, height, type } = dimensions;
  return (
    <>
      <h2 style={{ fontSize: 60 }}>{name}</h2>
      <p>Year: {year}</p>
      <p>Artist: {artist}</p>
      <p>Genre: {genre}</p>
      <p>
        Dimensions: {width} x {height}
      </p>
      <p>
        Format: {"."}
        {type}
        {slug}
      </p>
    </>
  );
}
