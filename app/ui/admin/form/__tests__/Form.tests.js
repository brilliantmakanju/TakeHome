import { screen, render } from "@testing-library/react";
import AdminDashboardForm from "../form";

describe("Admin Form for adding new users", () => {
  it("should render the form", () => {
    render(<AdminDashboardForm />);

    const formCont = screen.getByTestId("formCont");

    expect(formCont).toBeInTheDocument();
  });
});
