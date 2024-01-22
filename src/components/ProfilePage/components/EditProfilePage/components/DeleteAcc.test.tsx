import "@testing-library/jest-dom";
import {
  fireEvent,
  screen,
  render,
  waitFor,
} from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
  vi,
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { type deleteAccResponseProps, deleteAccSubmit } from "./functions";
import DeleteAcc from "./DeleteAcc";

const passwordData: string = "testAccount123";

const ModalTestId: string = "Modal";
const DeleteAccTestId: string = "DeleteAcc";
const DeleteAccSubtitleTestId: string = "DeleteAccSubtitle";
const DeleteAccPasswordTestId: string = "DeleteAccPassword";
const DeleteAccButtonTestId: string = "DeleteAccButton";

const router = createMemoryRouter(
  [ { path: "/profile/update/delete", element: <DeleteAcc /> } ],
  { initialEntries: [ "/profile/update/delete" ], }
);

const result: deleteAccResponseProps = {
  success: true,
  message: "your account has been deleted",
};

vi.mock("./functions", async () => ({
  deleteAccSubmit: vi.fn(async () => {
    return result;
  }),
}));

describe("Register component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(DeleteAccTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(DeleteAccSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with the correctly tailwind classes", () => {
    expect(screen.getByTestId(DeleteAccSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the Subtitle with the correctly text", () => {
    expect(screen.getByTestId(DeleteAccSubtitleTestId)).toHaveTextContent(
      "Delete Your Account"
    );
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(DeleteAccPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput with the correctly placeholder", () => {
    expect(screen.getByTestId(DeleteAccPasswordTestId)).toHaveAttribute(
      "placeholder",
      "Password"
    );
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(DeleteAccButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput with the correctly text", () => {
    expect(screen.getByTestId(DeleteAccButtonTestId)).toHaveTextContent(
      "Delete"
    );
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(DeleteAccPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(DeleteAccPasswordTestId)).toHaveValue(passwordData);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(DeleteAccButtonTestId));
    });

    expect(deleteAccSubmit).toHaveBeenCalled();
    expect(deleteAccSubmit).toHaveBeenCalledWith({
      userData: {
        password: passwordData,
      }
    });
  });
});
