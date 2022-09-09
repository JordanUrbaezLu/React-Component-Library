import classNames from "classnames";
import * as React from "react";
import styles from "./AstroTextField.module.scss";

export type Variants = "primary" | "secondary" | "tertiary";
export type Size = "small" | "medium" | "large";

interface AstroTextField {
  variant?: Variants;
  size?: Size;
  placeholder?: string;
  trailingIcon?: React.ReactNode;
  disabled?: boolean,
}

export const AstroTextField: React.FC<AstroTextField> = ({
  variant = "primary",
  size = "medium",
  placeholder,
  trailingIcon,
  disabled = false,
}) => {
  const classes = classNames(
    styles.astroTextField,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    variant === "tertiary" && styles.tertiary,
    size === "small" && styles.small,
    size === "medium" && styles.medium,
    size === "large" && styles.large,
    disabled && styles.disabled,
  );

  const iconClasses = classNames(
    size === "small" && styles.iconSmall,
    size === "medium" && styles.iconMedium,
    size === "large" && styles.iconLarge,
    disabled && styles.disabled,
  )

  return (
    <div className={styles.astroTextFieldContainer}>
      <input disabled={disabled} className={classes} placeholder={placeholder} />
      <span className={iconClasses}>
        {trailingIcon}
      </span>
    </div>
  );
};
