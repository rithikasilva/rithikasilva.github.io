import { defineConfig } from "astro/config";;
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

export default defineConfig({
  site: "https://rithikasilva.ca",
  integrations: [
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  output: "static",
});
