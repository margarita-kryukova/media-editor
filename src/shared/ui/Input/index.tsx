import React from "react";
import styles from "./index.module.scss";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ label, error, className = "", ...rest }, ref) => {
    const inputClasses = [
      styles.input,
      error ? styles.input_error : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={styles.label} htmlFor={rest.id || rest.name}>
            {label}
          </label>
        )}
        <input ref={ref} className={inputClasses} {...rest} />
        {error && <div className={styles.input__error}>{error}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
