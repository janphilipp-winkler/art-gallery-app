import { nanoid } from "nanoid";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Layout from "@/components/Layout";
import { List } from "@/components/StyledComponents";

export default function ArtPieces({ pieces }) {
  return (
    <Layout>
      <List>
        {pieces.map((piece) => (
          <ArtPiecePreview key={nanoid()} image={piece} />
        ))}
      </List>
    </Layout>
  );
}
