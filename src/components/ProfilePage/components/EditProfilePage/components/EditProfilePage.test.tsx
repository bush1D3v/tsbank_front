import "@testing-library/jest-dom";
import {
  fireEvent,
  screen,
  render
} from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
  vi,
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { handleLinkClick } from "../../../../../functions";
import EditProfilePage from "./EditProfilePage";

const {
  VITE_REACT_APP_UPDATE_ALL,
  VITE_REACT_APP_UPDATE_EMAIL,
  VITE_REACT_APP_UPDATE_PASSWORD,
  VITE_REACT_APP_UPDATE_PHONE,
  VITE_REACT_APP_DELETE_USER
} = import.meta.env;

const EditProfilePageTestId: string = "EditProfilePage";
const EditProfilePageListItemUpdateAll: string = "EditProfilePageListItemUpdateAll";
const EditProfilePageListItemUpdateEmail: string = "EditProfilePageListItemUpdateEmail";
const EditProfilePageListItemUpdatePassword: string = "EditProfilePageListItemUpdatePassword";
const EditProfilePageListItemUpdatePhone: string = "EditProfilePageListItemUpdatePhone";
const EditProfilePageListItemDeleteUser: string = "EditProfilePageListItemDeleteUser";

vi.mock("../../../../../functions", () => ({
  handleLinkClick: vi.fn(),
  eventClick: vi.fn(),
}));

const router = createMemoryRouter(
  [ { path: "/profile/edit", element: <EditProfilePage /> } ],
  { initialEntries: [ "/profile/edit" ], }
);

describe("Logo component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(EditProfilePageTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(EditProfilePageTestId)).toHaveClass(
      "flex max-w-fit h-[82dvh] flex-col items-center justify-center gap-10 md:gap-14 lg:gap-20 p-2"
    );
  });

  test("Should be able to render the UpdateAllListItem correctly", () => {
    expect(screen.getByTestId(EditProfilePageListItemUpdateAll)).toBeInTheDocument();
  });

  test("Should be able to fire event the UpdateAllListItem", () => {
    fireEvent.click(screen.getByTestId(EditProfilePageListItemUpdateAll));

    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_UPDATE_ALL);
  });

  test("Should be able to render the UpdateAllListItem with the correctly text", () => {
    expect(screen.getByTestId(EditProfilePageListItemUpdateAll).firstChild).toHaveTextContent("UPDATE ALL ACCOUNT INFO");
  });

  test("Should be able to render the UpdateEmailListItem correctly", () => {
    expect(screen.getByTestId(EditProfilePageListItemUpdateEmail)).toBeInTheDocument();
  });

  test("Should be able to fire event the UpdateEmailListItem", () => {
    fireEvent.click(screen.getByTestId(EditProfilePageListItemUpdateAll));

    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_UPDATE_EMAIL);
  });

  test("Should be able to render the UpdateEmailListItem with the correctly text", () => {
    expect(screen.getByTestId(EditProfilePageListItemUpdateEmail).firstChild).toHaveTextContent("UPDATE YOUR EMAIL");
  });

  test("Should be able to render the UpdatePasswordListItem correctly", () => {
    expect(screen.getByTestId(EditProfilePageListItemUpdatePassword)).toBeInTheDocument();
  });

  test("Should be able to fire event the UpdatePasswordListItem", () => {
    fireEvent.click(screen.getByTestId(EditProfilePageListItemUpdatePassword));

    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_UPDATE_PASSWORD);
  });

  test("Should be able to render the UpdatePasswordListItem with the correctly text", () => {
    expect(screen.getByTestId(EditProfilePageListItemUpdatePassword).firstChild).toHaveTextContent("UPDATE YOUR PASSWORD");
  });

  test("Should be able to render the UpdatePhoneListItem correctly", () => {
    expect(screen.getByTestId(EditProfilePageListItemUpdatePhone)).toBeInTheDocument();
  });

  test("Should be able to fire event the UpdatePhoneListItem", () => {
    fireEvent.click(screen.getByTestId(EditProfilePageListItemUpdatePhone));

    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_UPDATE_PHONE);
  });

  test("Should be able to render the UpdatePhoneListItem with the correctly text", () => {
    expect(screen.getByTestId(EditProfilePageListItemUpdatePhone).firstChild).toHaveTextContent("UPDATE YOUR PHONE");
  });

  test("Should be able to render the DeleteUserListItem correctly", () => {
    expect(screen.getByTestId(EditProfilePageListItemDeleteUser)).toBeInTheDocument();
  });

  test("Should be able to fire event the DeleteUserListItem", () => {
    fireEvent.click(screen.getByTestId(EditProfilePageListItemDeleteUser));

    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_DELETE_USER);
  });

  test("Should be able to render the DeleteUserListItem with the correctly text", () => {
    expect(screen.getByTestId(EditProfilePageListItemDeleteUser).firstChild).toHaveTextContent("DELETE ACCOUNT");
  });
});
