import useSWR from "swr";
import Spotlight from "@/components/Spotlight";
import getRandomPicture from "@/lib/getRandomPicture";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, isLoading, error } = useSWR(URL, fetcher);

  if (isLoading) {
    return null;
  }
  if (error) {
    return null;
  }

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight image={getRandomPicture(data)} />
    </div>
  );
}
