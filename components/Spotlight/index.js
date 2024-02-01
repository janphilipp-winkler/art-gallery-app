import BackgroundImage from "../BackgroundImage";
import {
  FlexCenter,
  CalltoActionButton,
  CopyrightButton,
} from "../StyledComponents";

export default function Spotlight({ image }) {
  return (
    <FlexCenter>
      <BackgroundImage pieceDetails={image} />
      <CalltoActionButton as="a" href={`/art-pieces/${image.slug}`}>
        This is image is from <strong>{image.artist}</strong>. <br></br>Do you
        want to see more?
      </CalltoActionButton>
      <CopyrightButton
        as="a"
        href="https://github.com/janphilipp-winkler/art-gallery-app"
      >
        <small>
          Made with ♥ by<br></br>Mareike, Bruno, Şevket & Jan-Philipp
        </small>
      </CopyrightButton>
    </FlexCenter>
  );
}
