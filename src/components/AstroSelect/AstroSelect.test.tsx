import { render, screen } from "@testing-library/react";
import AstroSelect, {
  AstroSelectVariant,
  AstroSelectSize,
} from "./AstroSelect";
import { axe, toHaveNoViolations } from "jest-axe";
import "@testing-library/jest-dom";
expect.extend(toHaveNoViolations);

describe("AstroSelect", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<AstroSelect />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<AstroSelect />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

// TODO: Finish test for AstroSelect once label prop is added in AstroSelect.tsx
