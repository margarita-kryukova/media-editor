import React from "react";
import styles from "./index.module.scss";

interface ISwitch {
  name: string;
  id: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}

const Switch: React.FC<ISwitch> = ({
  name,
  id,
  checked,
  onChange,
  disabled,
  leftLabel,
  rightLabel,
  className,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !disabled) {
      onChange();
    }
  };

  return (
    <div className={`${styles.switcher} ${className}`.trim()}>
      {leftLabel && <span className={styles.switcher__label}>{leftLabel}</span>}
      <input
        id={id}
        name={name}
        type="checkbox"
        className={styles.switcher__switch}
        checked={checked}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
      {rightLabel && (
        <span className={styles.switcher__label}>{rightLabel}</span>
      )}
    </div>
  );
};

export default Switch;
