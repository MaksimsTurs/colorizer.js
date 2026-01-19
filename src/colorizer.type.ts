export type Colorizer = {
  strikeThrought: () => Colorizer
  underline:      () => Colorizer
  /** Reduce the intensity of backround and font colors. */
  dim:            () => Colorizer
  italic:         () => Colorizer
  bold:           () => Colorizer
  /** Set the font color. */
  bg:             () => Colorizer
  /** Set the background color. */
  fg:             () => Colorizer
  /** Should be 24 bit value. */
  hex:            (hex: number) => Colorizer
  rgb:            (r: number, g: number, b: number) => Colorizer
  /** Apply a set of rules to the given text.*/
  text:           (text: string) => string;
};