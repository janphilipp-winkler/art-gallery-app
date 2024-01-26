import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function Details({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const image = pieces.find((piece) => piece.slug === slug);
  console.log(image);

  return (
    <>
      <ArtPieceDetails image={image}></ArtPieceDetails>
    </>
  );
}
