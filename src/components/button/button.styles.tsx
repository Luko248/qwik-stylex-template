import {create} from "@stylexjs/stylex";
import { borderRradius, color, gap } from "~/vars.stylex";
  
export const BUTTON_STYLES = create({
    default: {
      display: "block",
      cursor: "pointer",
    //   borderRadius: borderRradius.m,
    //   paddingBlock: gap.m,
    //   paddingInline: gap.l,
      fontSize: '1em',
    //   color: color.white,
      "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.5,
      },
    },
    primary: {
    //   backgroundColor: color.primary,
    //   "&:hover": {
    //     backgroundColor: color.info,
    //   },
    //   "&:active": {
    //     backgroundColor: color.success,
    //   },
    //   "&:disabled": {
    //     backgroundColor: color.grey,
    //   },
    },
    secondary: {
    //   backgroundColor: color.secondary,
    //   "&:hover": {
    //     backgroundColor: color.warning,
    //   },
    //   "&:active": {
    //     backgroundColor: color.error,
    //   },
    //   "&:disabled": {
    //     backgroundColor: color.grey,
    //   },
    },
    small: {
    //   fontSize: gap.s,
    //   paddingBlock: gap.s,
    },
    medium: {
    //   fontSize: gap.m,
    //   paddingBlock: gap.m,
    },
    large: {
    //   fontSize: gap.l,
    //   paddingBlock: gap.l,
    }
  });