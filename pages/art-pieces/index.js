import { nanoid } from "nanoid";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0;
`;

export default function ArtPieces({ pieces }) {
  return (
    <List>
      {pieces.map((piece) => (
        <ArtPiecePreview key={nanoid()} image={piece} />
      ))}
    </List>
  );
}
