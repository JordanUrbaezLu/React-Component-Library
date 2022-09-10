import * as React from "react";

export const getTriggerHeight = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) => {
  return ref.current?.getBoundingClientRect().height;
};
