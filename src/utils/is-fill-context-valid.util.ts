import STYLES from "../const/STYLES.const.ts";

export default function isFillContextValid(something?: string): boolean {
  return(
    !!(something &&
      (something === STYLES.BG ||
       something === STYLES.FG))
  );
};