import styles from "./index.module.scss";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: "primary" | "secondary";
  className?: string;
  text: string;
}

const Button: React.FC<IButtonProps> = ({
  typeButton = "primary",
  className = "",
  text,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button_${typeButton}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {text}
    </button>
  );
};

export default Button;
