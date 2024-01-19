import { Slot, component$, useSignal } from "@builder.io/qwik";
import { attrs} from "@stylexjs/stylex";
import { BUTTON_STYLES } from "./button.styles";
import type { ButtonProps } from "./button.types";
import { ButtonSize, ButtonVariant } from "./button.types";

export const Button = component$(({
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium
}: ButtonProps) => {

  const count = useSignal(0);

  return (
    <button {...attrs([
      BUTTON_STYLES.default, 
      BUTTON_STYLES[variant as keyof typeof BUTTON_STYLES], 
      BUTTON_STYLES[size as keyof typeof BUTTON_STYLES]]
      )}
      onClick$={() => count.value++}>
      <Slot />&nbsp;
      {count.value}
    </button>
  );
});