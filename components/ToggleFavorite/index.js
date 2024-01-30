import styled from "styled-components";

const HiddenInput = styled.input`
  display: none;
`;

export default function ToggleFavorite({ onToggleFavorite, isFavorite }) {
  return (
    <>
      <HiddenInput
        type="checkbox"
        id="favorite"
        onChange={onToggleFavorite}
        checked={isFavorite}
      ></HiddenInput>
      <label htmlFor="favorite">❤️</label>
    </>
  );
}
