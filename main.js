
import "reveal.js/dist/reveal.css";

// Themes
// https://revealjs.com/themes/
// node_modules/reveal.js/dist/theme
//
// highlight.js Styles
// https://github.com/highlightjs/highlight.js/tree/main/src/styles

// import "reveal.js/dist/theme/serif.css";
import "reveal.js/dist/theme/solarized.css";
import "./highlight/xcode.css";

// import "reveal.js/dist/theme/moon.css";
// import "reveal.js/plugin/highlight/monokai.css";
// import "reveal.js/plugin/highlight/zenburn.css";

import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight/highlight";
import Markdown from "reveal.js/plugin/markdown/markdown";

Reveal.initialize({
  hash: true,
  plugins: [ Markdown, Highlight ],
//  slideNumber: true
});
