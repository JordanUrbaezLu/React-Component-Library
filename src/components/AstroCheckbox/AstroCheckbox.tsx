import * as React from "react";
import styles from "./AstroCheckbox.module.scss";

export type AstroCheckboxVariant = "primary" | "secondary";

export type AstroCheckboxSize = "large" | "medium" | "small";

export type AstroCheckboxLabelPosition = "top" | "bottom" | "left" | "right";

interface AstroCheckbox {
  variant?: AstroCheckboxVariant;
  disabled?: boolean;
  size?: AstroCheckboxSize;
  label?: string;
  labelPosition?: AstroCheckboxLabelPosition;
  checked?: boolean;
}

const AstroCheckbox: React.FC<AstroCheckbox> = ({}) => {
  // * Finish implementing AstroCheckbox component
  return <div>AstroCheckbox</div>;
};

export default AstroCheckbox;
