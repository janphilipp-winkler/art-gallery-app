import { nanoid } from "nanoid";
import { PaletteItem, PalletteList } from "../StyledComponents";

export default function ColorPalette({ colors }) {
  return (
    <PalletteList>
      {colors.map((color) => (
        <PaletteItem key={nanoid()} color={color}></PaletteItem>
      ))}
    </PalletteList>
  );
}
