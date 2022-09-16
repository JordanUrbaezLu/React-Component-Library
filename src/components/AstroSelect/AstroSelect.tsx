import classNames from "classnames";
import styles from "./AstroSelect.module.scss";
import itemStyles from "./AstroSelectItem/AstroSelectItem.module.scss";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import * as React from "react";

export type AstroSelectVariant = "primary" | "secondary";
export type AstroSelectSize = "small" | "medium" | "large";

// TODO: Add a label to categorize the options
interface AstroSelectProps {
  variant?: AstroSelectVariant;
  children?: React.ReactNode;
  size?: AstroSelectSize;
  width?: number;
}

const AstroSelect: React.FC<AstroSelectProps> = ({
  children,
  width,
  variant = "primary",
  size = "medium",
}) => {
  const containerClasses = classNames(
    styles.astroSelectContainer,
    size === "small" && styles.smallContainer,
    size === "medium" && styles.mediumContainer,
    size === "large" && styles.largeContainer
  );

  const classes = classNames(
    styles.astroSelect,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    size === "small" && styles.small,
    size === "medium" && styles.medium,
    size === "large" && styles.large
  );

  const iconClasses = classNames(
    styles.icon,
    variant === "primary" && styles.primaryIcon,
    variant === "secondary" && styles.secondaryIcon,
    size === "small" && styles.smallIcon,
    size === "medium" && styles.mediumIcon,
    size === "large" && styles.largeIcon
  );

  const itemClasses = classNames(
    itemStyles.astroSelectItem,
    size === "small" && itemStyles.small,
    size === "medium" && itemStyles.medium,
    size === "large" && itemStyles.large
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");

  return (
    <div
      className={containerClasses}
      style={width ? { width: `${width}px` } : {}}
    >
      <div className={classes}>
        <div style={{ paddingLeft: "4px" }}>{value}</div>
        <div className={iconClasses} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
        </div>
      </div>
      {isOpen && (
        <div className={styles.selectOptionsMenu}>
          {React.Children.map(children, (child) => {
            const item = child as React.ReactElement;
            return (
              <div
                onClick={() => {
                  setValue(item.props.value);
                  setIsOpen(!isOpen);
                }}
                className={itemClasses}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AstroSelect;
