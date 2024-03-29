import { fetcher } from "@/lib/Fetcher";
import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data, isLoading, error } = useSWR(URL, fetcher);
  const [favorites, setFavorites] = useLocalStorageState("favs", []);

  if (isLoading) {
    return null;
  }
  if (error) {
    return null;
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </Layout>
  );
}
