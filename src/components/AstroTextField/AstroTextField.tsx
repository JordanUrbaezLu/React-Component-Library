import * as React from "react";

export type Variants = "primary" | "secondary" | "tertiary";

interface AstroTextField {
  variant?: Variants;
}

export const AstroTextField: React.FC<AstroTextField> = ({
  variant = "primary",
}) => {
  return <input />;
};
