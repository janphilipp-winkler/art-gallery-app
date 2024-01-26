import Spotlight from "@/components/Spotlight";
import getRandomPicture from "@/lib/getRandomPicture";

export default function HomePage({ pieces }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight image={getRandomPicture(pieces)} />
    </div>
  );
}
