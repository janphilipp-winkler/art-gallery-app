import Spotlight from "@/components/Spotlight";
import getRandomPicture from "@/lib/getRandomPicture";

export default function SpotlightPage({ pieces }) {
  return <Spotlight image={getRandomPicture(pieces)} />;
}
