# colorizer.js

Small library for simple coloring and styling of terminal output with ANSI charcters.

## Documentation
Its important that you should call `fg` (Background color) or `bg` (Font color) function before calling one of color functions like `hex` or `rgb` so that the library could create the correct order of ANSI characters.\
`hex` function takes over 24 bit value.

```js
import colorizer from "colorizer.ts";

console.log(
  // This will work.
  colorizer()
    .bold()
    .underline()
    .fg()
    .rgb(255, 255, 0)
    .text("WARN")
);

console.log(
  // This will work.
  colorizer()
    .bold()
    .underline()
    .bg()
    .hex(0xff_ff_ff_ff)
    //     R  G  B  
    .text("INFO")
);

console.log(
  // This will not work.
  colorizer()
    .bold()
    .underline()
    .rgb(255, 255, 0)
    .text("WARN")
);
```
You can create a reusable coloring function.
```js
import colorizer from "colorizer.ts";

const warn = colorizer()
  .bold()
  .bg()
  .rgb(255, 255, 0)
  .text;

console.log(warn("[WARN]:"), "Some warning!");
```