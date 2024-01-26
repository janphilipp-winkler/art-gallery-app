import GlobalStyle from "../styles";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const URL = "https://example-apis.vercel.app/api/art";
  const { data, isLoading, error } = useSWR(URL, fetcher);

  if (isLoading) {
    return null;
  }
  if (error) {
    return null;
  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
    </>
  );
}
