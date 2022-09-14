import classNames from "classnames";
import styles from "./AstroSelect.module.scss";
import { IoChevronDownSharp } from "react-icons/io5";
import * as React from "react";

export type AstroSelectVariant = "primary" | "secondary";

interface AstroSelectProps {
  variant?: AstroSelectVariant;
  children?: React.ReactNode;
  label: string;
}

const AstroSelect: React.FC<AstroSelectProps> = ({
  children,
  label,
  variant = "primary",
}) => {
  const classes = classNames(
    styles.astroSelect,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary
  );

  const iconClasses = classNames(
    variant === "primary" && styles.iconPrimary,
    variant === "secondary" && styles.iconSecondary
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className={classes} onClick={() => setIsOpen(!isOpen)} role="list">
      {label}
      <span className={iconClasses}>{<IoChevronDownSharp />}</span>
      {isOpen && <ul className={styles.selectMenu}>{children}</ul>}
    </div>
  );
};

export default AstroSelect;
