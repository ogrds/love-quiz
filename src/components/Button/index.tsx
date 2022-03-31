import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bg: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ children, bg, color, ...rest }) => {
  return (
    <button
      {...rest}
      style={{ background: bg, color: color, ...rest.style }}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export { Button };
