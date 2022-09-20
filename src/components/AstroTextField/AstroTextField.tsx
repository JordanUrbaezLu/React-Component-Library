import classNames from "classnames";
import * as React from "react";
import styles from "./AstroTextField.module.scss";

export type AstroTextFieldVariant = "primary" | "secondary" | "tertiary";
export type AstroTextFieldSize = "small" | "medium" | "large";
export type AstroTextFieldType =
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url";

interface AstroTextFieldProps {
  variant?: AstroTextFieldVariant;
  size?: AstroTextFieldSize;
  placeholder?: string;
  trailingIcon?: React.ReactNode;
  disabled?: boolean;
  type?: AstroTextFieldType;
  label?: string;
}

const AstroTextField: React.FC<AstroTextFieldProps> = ({
  variant = "primary",
  size = "medium",
  placeholder,
  trailingIcon,
  disabled = false,
  type = "text",
  label = "textfield",
}) => {
  const container = classNames(
    styles.astroTextFieldContainer,
    disabled && styles.disabled
  );

  const classes = classNames(
    styles.astroTextField,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    variant === "tertiary" && styles.tertiary,
    size === "small" && styles.small,
    size === "medium" && styles.medium,
    size === "large" && styles.large,
    disabled && styles.disabled
  );

  const iconClasses = classNames(
    size === "small" && styles.iconSmall,
    size === "medium" && styles.iconMedium,
    size === "large" && styles.iconLarge,
    disabled && styles.disabled
  );

  return (
    <div className={container}>
      <input
        aria-label={label}
        type={type}
        disabled={disabled}
        className={classes}
        placeholder={placeholder}
      />
      {trailingIcon && <span className={iconClasses}>{trailingIcon}</span>}
    </div>
  );
};

export default AstroTextField;
