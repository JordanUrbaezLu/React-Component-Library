import * as React from "react";
import styles from "./AstroSelectItem.module.scss";

interface AstroSelectItemProps {
  children?: React.ReactNode;
}

const AstroSelectItem: React.FC<AstroSelectItemProps> = ({ children }) => {
  return <div className={styles.astroSelectItem} >{children}</div>;
};

export default AstroSelectItem;
