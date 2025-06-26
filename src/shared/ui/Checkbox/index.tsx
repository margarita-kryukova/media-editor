import React from "react";
import styles from "./index.module.scss";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, ...rest }, ref) => (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <input
          ref={ref}
          type="checkbox"
          className={`${styles.checkbox} ${
            error ? styles.checkbox_error : ""
          }`.trim()}
          {...rest}
        />
        {label && <span className={styles.checkbox__text}>{label}</span>}
      </label>
    </div>
  )
);

export default Checkbox;
