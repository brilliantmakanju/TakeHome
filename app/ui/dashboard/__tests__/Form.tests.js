import { render, screen } from "@testing-library/react";
import DashboardForm from "../form/form";
import ButtonProps from "../form/button";
import Input from "../form/input";

describe("Form Field", () => {
  it("should render the form on the user dashboard", () => {
    render(<DashboardForm />);

    const formCont = screen.getByTestId("dashboardform");

    expect(formCont).toBeInTheDocument();
  });

  it("should redner the input field component in the form", () => {
    render(
      <Input
        name="Company_name"
        type="text"
        required
        placeholder="Company Name"
      />
    );

    const inputField = screen.getByTestId("input_field");

    expect(inputField).toBeInTheDocument();
  });

  it("should render the button component", () => {
    render(<ButtonProps type="submit" />);

    const btn = screen.getByRole("button", {
      type: "submit",
    });

    expect(btn).toBeInTheDocument();
  });
});
