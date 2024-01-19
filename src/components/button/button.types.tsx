export enum ButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
  }
  
  export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary'
  }

export type ButtonProps = {
    variant?: ButtonVariant | string;
    size?: ButtonSize | string;
  };