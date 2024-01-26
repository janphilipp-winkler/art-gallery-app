import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <h1>Art Gallery</h1>
      {children}
      <Navigation />
    </>
  );
}
