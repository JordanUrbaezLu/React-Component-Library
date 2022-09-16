import { render, screen } from "@testing-library/react";
import AstroSelect, {
  AstroSelectVariant,
  AstroSelectSize,
} from "./AstroSelect";
import AstroSelectItem from "./AstroSelectItem/AstroSelectItem";
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

describe("Props", () => {
  test.each<AstroSelectVariant>(["primary", "secondary"])(
    "Should render variants correctly.",
    (variant) => {
      render(<AstroSelect label="select" variant={variant} />);
      expect(screen.getByText("select")).toHaveClass(`${variant}Label`);
    }
  );

  test.each<AstroSelectSize>(["large", "medium", "small"])(
    "Should render size correctly.",
    (size) => {
      render(<AstroSelect label="select" size={size} />);
      expect(screen.getByText("select")).toHaveClass(`${size}Label`);
    }
  );

  test("Should render width correctly.", () => {
    render(
      <div data-testid="select">
        <AstroSelect width={350} />
      </div>
    );
    expect(screen.getByTestId("select").firstChild).toHaveStyle("width: 350px");
  });

  test("Should render label correctly.", () => {
    render(<AstroSelect label="astroSelect" />);
    expect(screen.getByText("astroSelect")).toBeInTheDocument();
  });
});
