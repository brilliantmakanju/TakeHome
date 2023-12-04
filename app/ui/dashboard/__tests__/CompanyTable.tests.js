import { screen, render } from "@testing-library/react";
import CompanyTable from "../company_data/company_table";

describe("Users Data", () => {
  it("should render a table showing all added users", () => {
    render(<CompanyTable />);

    const tableData = screen.getByRole("table");

    expect(tableData).toBeInTheDocument();
  });

  it("should render a table showing all added users images", () => {
    render(<CompanyTable />);

    const tableDataImages = screen.getAllByRole("img");

    tableDataImages.forEach((tableDataImage) => {
      expect(tableDataImage).toBeInTheDocument();
    });
  });
});
