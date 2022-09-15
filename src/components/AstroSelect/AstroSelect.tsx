import classNames from "classnames";
import styles from "./AstroSelect.module.scss";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import * as React from "react";

export type AstroSelectVariant = "primary" | "secondary";
export type AstroSelectSize = "small" | "medium" | "large";

interface AstroSelectProps {
  variant?: AstroSelectVariant;
  children?: React.ReactNode;
  label: string;
  size?: AstroSelectSize;
}

const AstroSelect: React.FC<AstroSelectProps> = ({
  children,
  label,
  variant = "primary",
  size = "medium",
}) => {
  const classes = classNames(
    styles.astroSelect,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    size === "small" && styles.small,
    size === "medium" && styles.medium,
    size === "large" && styles.large
  );

  const iconClasses = classNames(
    variant === "primary" && styles.iconPrimary,
    variant === "secondary" && styles.iconSecondary
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className={styles.astroSelectContainer}>
      <div className={classes}>
        <div>{label}</div>
        <div onClick={() => setIsOpen(!isOpen)} className={iconClasses}>
          {isOpen ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
        </div>
      </div>
      {isOpen && <div className={styles.selectOptionsMenu}>{children}</div>}
    </div>
  );
};

export default AstroSelect;
