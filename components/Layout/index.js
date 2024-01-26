import Navigation from "../Navigation";
import { H1 } from "../StyledComponents";

export default function Layout({ children }) {
  return (
    <>
      <H1>Art Gallery</H1>
      {children}
      <Navigation />
    </>
  );
}
