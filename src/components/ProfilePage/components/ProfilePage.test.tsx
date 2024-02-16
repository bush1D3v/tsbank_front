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
import { type UserData } from "@/types";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { handleLinkClick, logoutClick } from "@/functions";
import { UPDATE, LOGIN } from "@/utils/routerPaths";
import ProfilePage from "./ProfilePage";

const emailData: string = "testAccount@gmail.com";
const phoneData: string = "21212121211";
const cpfData: string = "21212121536";

const userData: UserData = {
  "user": {
    "id": 75,
    "cpf": cpfData,
    "name": "Victor José Lopes Navarro",
    "email": emailData,
    "phone": phoneData,
    "balance": 0,
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUsImlhdCI6MTcwNTg3NjUxNywiZXhwIjoxNzA1OTYyOTE3fQ.Ixaq8aiAQEKHYpAkpNXnw0WZebNAbU8_fIS1Z2pYEss"
};

const TableTestId: string = "Table";
const ProfilePageTestId: string = "ProfilePage";
const ProfilePageListTestId: string = "ProfilePageList";
const ProfilePageListItemEditProfile: string = "ProfilePageListItemEditProfile";
const ProfilePageListItemLogout: string = "ProfilePageListItemLogout";

vi.mock("@/functions", () => ({
  handleLinkClick: vi.fn(),
  eventClick: vi.fn(),
  logoutClick: vi.fn(),
  jsonUserParser: vi.fn(() => {
    return userData;
  })
}));

const router = createMemoryRouter(
  [ { path: "/profile/edit", element: <ProfilePage /> } ],
  { initialEntries: [ "/profile/edit" ], }
);

describe("ProfilePage component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ProfilePageTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ProfilePageTestId)).toHaveClass(
      "flex justify-center items-center h-[82dvh] flex-col gap-10 md:gap-14 lg:gap-20 p-2"
    );
  });

  test("Should be able to render the Table component correctly", () => {
    expect(screen.getByTestId(TableTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Table component correctly email", () => {
    expect(screen.getByTestId(TableTestId)).toHaveTextContent(emailData);
  });

  test("Should be able to render the Table component correctly phone", () => {
    expect(screen.getByTestId(TableTestId)).toHaveTextContent(phoneData);
  });

  test("Should be able to render the Table component correctly cpf", () => {
    expect(screen.getByTestId(TableTestId)).toHaveTextContent(cpfData);
  });

  test("Should be able to render the List component correctly", () => {
    expect(screen.getByTestId(ProfilePageListTestId)).toBeInTheDocument();
  });

  test("Should be able to render the List component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ProfilePageListTestId)).toHaveClass(
      "flex gap-8 w-full px-2"
    );
  });

  test("Should be able to render the UpdateProfileListItem correctly", () => {
    expect(screen.getByTestId(ProfilePageListItemEditProfile)).toBeInTheDocument();
  });

  test("Should be able to fire event the UpdateProfileListItem", () => {
    fireEvent.click(screen.getByTestId(ProfilePageListItemEditProfile));

    expect(handleLinkClick).toHaveBeenCalledWith(UPDATE);
  });

  test("Should be able to render the UpdateProfileListItem with the correctly text", () => {
    expect(screen.getByTestId(ProfilePageListItemEditProfile).firstChild).toHaveTextContent("EDIT PROFILE");
  });

  test("Should be able to render the LogoutListItem correctly", () => {
    expect(screen.getByTestId(ProfilePageListItemLogout)).toBeInTheDocument();
  });

  test("Should be able to fire event the LogoutListItem", () => {
    fireEvent.click(screen.getByTestId(ProfilePageListItemLogout));

    expect(logoutClick).toHaveBeenCalledWith(LOGIN);
  });

  test("Should be able to render the LogoutListItem with the correctly text", () => {
    expect(screen.getByTestId(ProfilePageListItemLogout).firstChild).toHaveTextContent("LOGOUT");
  });
});
