import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { attrs, create } from "@stylexjs/stylex";

import { color, gap, media } from "../vars.stylex";
export default component$(() => {
  return (
    <section {...attrs(styles.section)}>
      <h1 {...attrs(styles.heading)}>Qwik + Vite + StyleX + SCSS template</h1>
      <p {...attrs(styles.desc)}>
        This is a template for creating a new Qwik website using Vite, StyleX
        and SCSS.
      </p>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Qwik + Vite + StyleX + SCSS template",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

const styles = create({
  section: {
    paddingBlock: "8svb",
  },
  heading: {
    color: color.textDark,
    fontSize: gap.xxl,
    backgroundColor: color.black,
    textAlign: "center",
    paddingBlock: gap.xxxl,
    textTransform: "uppercase",
    letterSpacing: gap.s,
  },
  desc: {
    color: color.textLight,
    marginInline: "auto",
    inlineSize: `min(calc(${media.widthDesktopL} - ${gap.xl}), 100%)`,
    fontSize: gap.xl,
    textAlign: "center",
  }
});