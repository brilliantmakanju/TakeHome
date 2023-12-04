import { render, screen } from "@testing-library/react";
import AdminSideBarComponent from "../sidebar/sidebar";
import SideBarMenu from "../sidebar/sidebarmenu";
import { MdSupervisedUserCircle } from "react-icons/md";

describe("Admin SideBar", () => {
  it("should render the profile image", () => {
    render(<AdminSideBarComponent />);

    const Image = screen.getByRole("img", {
      alt: "Profile",
    });

    expect(Image).toBeInTheDocument();
  });

  it("should render the user name", () => {
    render(<AdminSideBarComponent />);

    const userName = screen.getByText("John Stewi");

    expect(userName).toBeInTheDocument();
  });

  it("should render the link", () => {
    render(
      <SideBarMenu
        path="/admin/dashboard/users"
        icon={<MdSupervisedUserCircle />}
        title="Users"
      />
    );

    const Link = screen.getByRole("link");

    expect(Link).toBeInTheDocument();
  });
});
