import * as stylex from "@stylexjs/stylex";

export const color = stylex.defineVars({
  black: "var(--color-black)",
  white: "var(--color-white)",
  transparent: "var(--color-transparent)",
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  info: "var(--color-info)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  error: "var(--color-error)",
  grey: "var(--color-grey)",
  border: "var(--color-border)",
  background: "var(--color-background)",
  textLight: "var(--color-text-light)",
  textDark: "var(--color-text-dark)"
});

export const gap = stylex.defineVars({
  default: "var(--gap)",
  xs: "var(--gap-xs)",
  s: "var(--gap-s)",
  m: "var(--gap-m)",
  l: "var(--gap-l)",
  xl: "var(--gap-xl)",
  xxl: "var(--gap-2xl)",
  xxxl: "var(--gap-3xl)",
});

export const border = stylex.defineVars({
  width: "var(--border-width)",
  widthL: "var(--border-width-l)",
});

export const borderRradius = stylex.defineVars({
  s: "var(--radius-s)",
  m: "var(--radius-m)",
  l: "var(--radius-l)",
  none: "var(--radius-none)",
  circle: "var(--radius-circle)",
});

export const boxShadow = stylex.defineVars({
  x: "var(--shadow-x)",
  y: "var(--shadow-y)",
  radiusXs: "var(--shadow-radius-xs)",
  radiusS: "var(--shadow-radius-s)",
  radiusM: "var(--shadow-radius-m)",
  radiusL: "var(--shadow-radius-l)",
  radiusXl: "var(--shadow-radius-xl)",
});

export const animation = stylex.defineVars({
  time: "var(--trans-time)",
  function: "var(--trans-fnc)",
});

export const media = stylex.defineVars({
  widthMobileS: "var(--width-mobile-s)",
  widthMobileM: "var(--width-mobile-m)",
  widthMobileL: "var(--width-mobile-l)",
  widthMobileXl: "var(--width-mobile-xl)",
  widthTablet: "var(--width-tablet)",
  widthDesktopS: "var(--width-desktop-s)",
  widthDesktopL: "var(--width-desktop-l)",
  widthDesktopHd: "var(--width-desktop-hd)",
  widthDesktopFullHd: "var(--width-desktop-full-hd)",
  widthDesktop2k: "var(--width-desktop-2k)",
  widthDesktop4k: "var(--width-desktop-4k)",
});