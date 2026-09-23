// GitHub Pages serves 404.html for any path it has no file for. Shipping a copy
// of index.html means a deep link like /work boots the SPA and the router
// resolves the route, instead of hard-failing on refresh.
import { copyFileSync } from "node:fs";

copyFileSync("build/index.html", "build/404.html");
console.log("spa-fallback: wrote build/404.html");
