export default Colorizer;
declare class Colorizer {
  strikeThrought(): Colorizer;
  blinking(): Colorizer;
  underline(): Colorizer;
  dim(): Colorizer;
  italic(): Colorizer;
  bold(): Colorizer;
  reverse(): Colorizer;
  hidden(): Colorizer;
  /**
    *  @description Set font styles, should be called before any styling function.
    */
  font(): Colorizer;
  /**
    *  @description Set background styles, should be called before any of styling functions.
    */
  background(): Colorizer;
  rgb(r: number, g: number, b: number): Colorizer;
  /**
    *  @description Combine all styles together and returns styled text.
    */
  text(text: string): string;

  private styles: string[]
}
