export default function ToggleFavorite({ onToggleFavorite, isFavorite }) {
  return (
    <>
      <input
        type="checkbox"
        id="favorite"
        onChange={onToggleFavorite}
        checked={isFavorite}
      ></input>
      <label htmlFor="favorite">❤️</label>
    </>
  );
}
