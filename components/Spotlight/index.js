import styled from "styled-components";
import BackgroundImage from "../BackgroundImage";

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CalltoActionButton = styled.button`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--btn-background);
  color: black;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  text-decoration: none;
  backdrop-filter: blur(5px);
`;

const CopyrightButton = styled(CalltoActionButton)`
  bottom: 20px;
  text-align: center;
`;

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
