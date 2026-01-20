import STYLES from "./const/STYLES.const.ts";

import type { Colorizer } from "./colorizer.type.ts";

import isFillLocation from "./utils/is-fill-location.util.ts";

const _warn: Colorizer["text"] = colorizer()
  .bold()
  .font()
  .rgb(170, 170, 0)
  .text;
const _text: Colorizer["text"] = colorizer()
  .dim()
  .font()
  .rgb(255, 255, 255)
  .text;

export default function colorizer(): Colorizer {
  let styles: string[] = [];

  return {
    // Font styles.
    strikeThrought: function(): Colorizer {
      styles.push(STYLES.STRIKE_THROUGHT);

      return this;
    },
    underline: function(): Colorizer {
      styles.push(STYLES.UNDERLINE);

      return this;
    },
    dim: function(): Colorizer {
      styles.push(STYLES.DIM);

      return this;
    },
    italic: function(): Colorizer {
      styles.push(STYLES.ITALIC);

      return this;
    },
    bold: function(): Colorizer {
      styles.push(STYLES.BOLD);

      return this;
    },
    // Fill locations.
    font: function(): Colorizer {
      styles.push(STYLES.BG);

      return this;
    },
    background: function(): Colorizer {
      styles.push(STYLES.FG);

      return this;
    },
    // Font Colors.
    hex: function(hex: number): Colorizer {
      const r: number = hex >> 16 & 0xff;
      const g: number = hex >> 8  & 0xff;
      const b: number = hex >> 0  & 0xff;

      if(!isFillLocation(styles.at(-1))) {
        console.warn(_warn("[WARN]:"), _text(`The hex color does not have effect because the fill location "${styles.at(-1)}" is not valid!`));
        console.warn(_warn("[WARN]:"), _text("Call the \"fg\" function for background color or \"bg\" for font color!"));
      }

      styles.push(`${r};${g};${b}m`);

      return this;
    },
    rgb: function(r: number, g: number, b: number): Colorizer {
      if(!isFillLocation(styles.at(-1))) {
        console.warn(_warn("[WARN]:"), _text(`The rgb color does not have effect because the fill location "${styles.at(-1)}" is not valid!`));
        console.warn(_warn("[WARN]:"), _text("Call the \"fg\" function for background color or \"bg\" for font color!"));
      }

      styles.push(`${r};${g};${b}m`);

      return this;
    },
    text: function(text: string): string {
      let colorized: string = "";

      for(let index: number = 0; index < styles.length; index++) {
        colorized += styles[index];
      }

      colorized += text;
      colorized += STYLES.RESET;
      
      return colorized;
    },
  }
};