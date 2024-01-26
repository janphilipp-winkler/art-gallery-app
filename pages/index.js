import Layout from "@/components/Layout";
import Spotlight from "@/components/Spotlight";
import getRandomPicture from "@/lib/getRandomPicture";

export default function HomePage({ pieces }) {
  return (
    <Layout>
      <Spotlight image={getRandomPicture(pieces)} />
    </Layout>
  );
}
