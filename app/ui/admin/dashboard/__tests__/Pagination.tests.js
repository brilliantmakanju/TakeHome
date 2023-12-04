import { render, screen } from "@testing-library/react";
import Pagenation from "../pagination/pagenation";

describe("Will the Rendering the Pagination Components", () => {
  it("should render the buttons", () => {
    render(<Pagenation />);

    const button = screen.getByTestId("button-prev");

    expect(button).toBeInTheDocument();
  });
  it("should render the buttons", () => {
    render(<Pagenation />);

    const button = screen.getByTestId("button-next");

    expect(button).toBeInTheDocument();
  });
  it("should render the buttons previous text", () => {
    render(<Pagenation />);

    const previous = screen.getByText("Previous");

    expect(previous).toBeInTheDocument();
  });
  it("should render the buttons next text", () => {
    render(<Pagenation />);

    const next = screen.getByText("Next");

    expect(next).toBeInTheDocument();
  });
});
