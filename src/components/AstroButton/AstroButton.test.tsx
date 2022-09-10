import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AstroButton, {
  AstroButtonSize,
  AstroButtonVariants,
} from "./AstroButton";
import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

describe("AstroButton", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<AstroButton>AstroButton</AstroButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("Accessibility", () => {
  test("Should have no accessibility violations.", async () => {
    const { container } = render(<AstroButton>AstroButton</AstroButton>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Props", () => {
  test.each<AstroButtonVariants>(["primary", "secondary"])(
    "Should render variants correctly.",
    (variant) => {
      render(<AstroButton variant={variant}>AstroButton</AstroButton>);
      expect(screen.getByRole("button", { name: "AstroButton" })).toHaveClass(
        variant
      );
    }
  );
  test.each<AstroButtonSize>(["small", "medium", "large"])(
    "Should render sizes correctly",
    (size) => {
      render(<AstroButton size={size}>AstroButton</AstroButton>);
      expect(screen.getByRole("button", { name: "AstroButton" })).toHaveClass(
        size
      );
    }
  );
  test("Should render leading icon correctly.", () => {
    render(<AstroButton leadingIcon="leading">AstroButton</AstroButton>);
    expect(
      screen.getByRole("button", { name: "leading AstroButton" })
    ).toBeInTheDocument();
  });

  test("Should render trailing icon correctly.", () => {
    render(<AstroButton trailingIcon="trailing">AstroButton</AstroButton>);
    expect(
      screen.getByRole("button", { name: "AstroButton trailing" })
    ).toBeInTheDocument();
  });

  test("Should render disabled correctly.", () => {
    render(<AstroButton disabled>AstroButton</AstroButton>);
    expect(screen.getByRole("button", { name: "AstroButton" })).toHaveClass(
      "disabled"
    );
  });

  test("Should render children correctly.", () => {
    render(<AstroButton>AstroButton</AstroButton>);
    expect(
      screen.getByRole("button", { name: "AstroButton" })
    ).toBeInTheDocument();
  });
});
