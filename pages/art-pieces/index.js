import { nanoid } from "nanoid";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import { List } from "@/components/StyledComponents";

export default function ArtPieces({ pieces }) {
  return (
    <List>
      {pieces.map((piece) => (
        <ArtPiecePreview key={nanoid()} image={piece} />
      ))}
    </List>
  );
}
