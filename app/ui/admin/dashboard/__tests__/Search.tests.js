import { render, screen } from "@testing-library/react";
import Search from "../search/search";

describe("Search Field ", () => {
  it("should render the search field", () => {
    render(<Search />);

    const input = screen.getByTestId("search-input");

    expect(input).toBeInTheDocument();
  });
  it("should render the search icon", () => {
    render(<Search />);

    const inputIcon = screen.getByTestId("search-icon");

    expect(inputIcon).toBeInTheDocument();
  });
});
