# colorizer.js

Small library for simple coloring and styling of terminal output with ANSI characters.

## Documentation
Its important that you should call `background` or `font` function before calling one of color functions like `hex` or `rgb` so that the library could create the correct order of ANSI characters. `hex` function takes over 24 bit value.

First, import the library
```js
import colorizer from "colorizer.js";
```

This will work.
```js
console.log(
  colorizer()
    .bold()
    .underline()
    .font()
    .rgb(255, 255, 0)
    .text("WARN")
);
```
This will work too.
```js
console.log(
  colorizer()
    .background()
    .hex(0xff_ff_ff)
    //     R  G  B 
    .bold()
    .underline()
    .text("WARN")
);
```
This will not work.
```js
console.log(
  colorizer()
    // On whom should this color be applied??
    .hex(0xff_ff_ff)
    .bold()
    .underline()
    .text("WARN")
);
```
This will not work too.
```js
console.log(
  colorizer()
    // Incorrect sequence of ANSI characters! 
    .font()
    .bold() // <- Either move it before applying colors or after.
    .hex(0xff_ff_ff)
    .underline()
    .text("WARN")
);
```
You can create a reusable coloring function.
```js
import colorizer from "colorizer.ts";

const warn = colorizer()
  .bold()
  .font()
  .rgb(255, 255, 0)
  .text;

console.log(warn("[WARN]:"), "Some warning!");
```