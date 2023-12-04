import { render, screen } from "@testing-library/react";
import AdminNewestUser from "../data/newestUser";

describe("User Data List rendered in a table ", () => {
  it("should render the user data in a table", () => {
    render(<AdminNewestUser />);

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument();
  });
});
