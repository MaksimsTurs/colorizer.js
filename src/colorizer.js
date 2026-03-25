import STYLES from "./const/STYLES.const.js";
import STYLE_CONTEXT from "./const/STYLE_CONTEXT.const.js";

class Colorizer {
  constructor() {
    this.#styles = [];
  };
  /**
   *  @returns {Colorizer}
   */
  strikeThrought() {
    this.#styles.push(STYLES.STRIKE_THROUGHT);
    return this;
  };
  /**
   *  @returns {Colorizer}
   */
  blinking() {
    this.#styles.push(STYLES.BLINKING);
    return this;
  };
  /**
   *  @returns {Colorizer}
   */
  underline() {
    this.#styles.push(STYLES.UNDERLINE);
    return this;
  };
  /**
   *  @returns {Colorizer}
   */
  dim() {
    this.#styles.push(STYLES.DIM);
    return this;
  };
  /**
   *  @returns {Colorizer}
   */
  italic() {
    this.#styles.push(STYLES.ITALIC);
    return this;
  };
  /**
   *  @returns {Colorizer}
   */
  bold() {
    this.#styles.push(STYLES.BOLD);
    return this;
  };
  /**
   *  @returns {Colorizer}
   */
  reverse() {
    this.#styles.push(STYLES.REVERSE);
    return this;
  };
  /**
   *  @returns {Colorizer}
   */
  hidden() {
    this.#styles.push(STYLES.HIDDEN);
    return this;
  };
  /**
   *  @description Set font styles, should be called before any styling function.
   *  @returns {Colorizer}
   */
  font() {
    this.#styles.push(STYLE_CONTEXT.BG);
    return this;
  };
  /**
   *  @description Set background styles, should be called before any of styling functions.
   *  @returns {Colorizer}
   */
  background() {
    this.#styles.push(STYLE_CONTEXT.FG);
    return this;
  };
  /**
   *  @param {number} r
   *  @param {number} g
   *  @param {number} b
   *  @returns {Colorizer}
   */
  rgb(r, g, b) {
    this.#styles.push(`${r};${g};${b}m`);
    return this;
  };
  /**
   *  @description Combine all styles together and returns styled text.
   *  @param {string} text
   *  @returns {string}
   */
  text(text) {
    this.#styles.push(text);
    this.#styles.push(STYLES.RESET);

    return this.#styles.join("");
  };
  /**
   *  @private
   *  @type {string[]}
   */
  #styles = null;
};

export default Colorizer;
