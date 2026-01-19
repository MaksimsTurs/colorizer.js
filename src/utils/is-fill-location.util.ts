import STYLES from "../const/STYLES.const.ts";

export default function isFillLocation(maybeFillLocation?: string): boolean {
  return(
    !!(maybeFillLocation &&
      (maybeFillLocation === STYLES.BG ||
       maybeFillLocation === STYLES.FG))
  );
};