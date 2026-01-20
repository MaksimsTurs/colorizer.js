const STYLES = {
  RESET:           "\x1b[0m",
  BOLD:            "\x1b[1m",
  TRANSPARENT:     "\x1b[2m",
  ITALIC:          "\x1b[3m",
  UNDERLINE:       "\x1b[4m",
  STRIKE_THROUGHT: "\x1b[9m",
  
  BG:        "\x1b[38;2;",
  FG:        "\x1b[48;2;",
} as const;

export default STYLES;