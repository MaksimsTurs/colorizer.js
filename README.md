# colorizer.js
Small library for simple coloring and styling of console output with ANSI charcters.

## Documentation
Its important that you should call `background` or `font` function before calling `rgb` so that the library could create the correct order of ANSI characters. 
```js
import Colorizer from "colorizer.js";

const warn = new Colorizer()
    .bold()
    .font()
    .rgb(127, 127, 0)
    .text("WARN");
console.warn(warn("Warning!"))
```
This will not work and potentially break you console output.
```js
import Colorizer from "colorizer.js";

const warn = new Colorizer()
    .bold()
    // We calling the coloring function before setting the styling context.
    .rgb(127, 127, 0) 
    .font()
    .text("WARN");
console.warn(warn("Warning!"))
```
