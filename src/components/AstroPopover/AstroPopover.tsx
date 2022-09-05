import * as React from "react";
import styles from "./AstroPopover.module.scss";
import classNames from "classnames";
import { getPopoverContainerHeight } from "./getPopoverContainerHeight";

export type Position = "bottom" | "left" | "right" | "top";

interface AstroPopoverProps {
  trigger: React.ReactNode;
  position?: Position;
  hasNubbin?: boolean;
  text: string;
  isOpen?: boolean;
}

export const AstroPopover: React.FC<AstroPopoverProps> = ({
  trigger,
  position = "bottom",
  hasNubbin = false,
  text,
  isOpen = false,
}) => {
  const [popoverHeight, setPopoverHeight] = React.useState<number>();

  const popoverContainerRef = React.useRef<HTMLDivElement>(null);
  const classes = classNames(
    styles.astroPopover,
    position === "bottom" && styles.bottom,
    position === "top" && styles.top,
    hasNubbin && styles.nubbin
  );

  React.useEffect(() => {
    const positionStyle = getPopoverContainerHeight({
      ref: popoverContainerRef,
    });
    setPopoverHeight(positionStyle);
  }, [isOpen]);

  return (
    <div ref={popoverContainerRef} className={styles.astroPopoverContainer}>
      {trigger}
      <div style={isOpen ? {transition: "opacity 0.5s", opacity: 1} : {opacity: 0}}>
        {isOpen && (
          <div
            style={
              position === "top"
                ? {
                    bottom: `${
                      (popoverHeight || 0) + (hasNubbin ? 7 : 0) + 4
                    }px`,
                  }
                : {}
            }
            className={classes}
          >
            {text}
          </div>
        )}
      </div>
    </div>
  );
};
