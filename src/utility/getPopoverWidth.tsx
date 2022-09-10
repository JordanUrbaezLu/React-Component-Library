import * as React from "react";

export const getPopoverWidth = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) => {
  return ref.current?.getBoundingClientRect().width;
};
