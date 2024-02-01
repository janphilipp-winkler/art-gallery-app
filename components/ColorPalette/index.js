import { nanoid } from "nanoid";
import { PaletteItem, PalletteList } from "../StyledComponents";

export default function ColorPalette({ colors }) {
  return (
    <>
      <h5
        style={{
          padding: 0,
          margin: 0,
          marginTop: "20px",
          marginBottom: "6px",
        }}
      >
        Color palette:
      </h5>
      <PalletteList style={{ margin: 0 }}>
        {colors.map((color) => (
          <PaletteItem key={nanoid()} color={color}></PaletteItem>
        ))}
      </PalletteList>
    </>
  );
}
