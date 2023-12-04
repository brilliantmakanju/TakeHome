import { render, screen } from "@testing-library/react";
import UsersTable from '../users/users'

describe("User Data List rendered in a table ", () => {
  it("should render the user data in a table", () => {
    render(<UsersTable />);

    const table = screen.getByRole("table");

    expect(table).toBeInTheDocument();
  });
});
