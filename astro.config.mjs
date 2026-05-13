import { defineConfig } from "astro/config";;
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://rithikasilva.ca",
  integrations: [
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  output: "static",
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
