import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import * as stylex from "@stylexjs/stylex";
import "./scss/index.scss";

import "virtual:stylex.css";
import { color } from "./vars.stylex";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body {...stylex.attrs(styles.body)} lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});

const styles = stylex.create({
  body: {
    margin: 0,
    minBlockSize: "100svb",
    color: color.textLight,
    overflowX: "clip",
  },
});
