import * as React from "react";

export const getPopoverContainerHeight = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) => {
  return ref.current?.getBoundingClientRect().height;
};
