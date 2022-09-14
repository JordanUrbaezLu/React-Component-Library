import * as React from "react";

interface AstroSelectItemProps {
  children?: React.ReactNode;
}

const AstroSelectItem: React.FC<AstroSelectItemProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AstroSelectItem;
