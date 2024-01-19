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
  vi,
  beforeEach,
  type Mock,
} from "vitest";
import Modal from "./Modal";

const ModalTestId: string = "Modal";
const ModalButtonTestId: string = "ModalButton";

const testDescription: string = "testDescription";
const testTitle: string = "testTitle";
const testBtnMessage: string = "testBtnMessage";

const handleClick: Mock = vi.fn();

describe("Modal component tests", () => {
  beforeEach(() => {
    render(
      <Modal
        isOpen={true}
        setOpen={handleClick}
        description={testDescription}
        title={testTitle}
        btnMessage={testBtnMessage}
      />
    );
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with correctly tailwind classes", () => {
    expect(screen.getByTestId(ModalTestId)).toHaveClass(`
      fixed top-0 bottom-0 left-0 right-0 bg-[#00000090] text-center
    `);
  });

  test("Should be able to render the component with the correctly title parameter", () => {
    expect(screen.getByTestId(ModalTestId)).toHaveTextContent(testTitle);
  });

  test("Should be able to render the component with the correctly btnMessage parameter", () => {
    expect(screen.getByTestId(ModalTestId)).toHaveTextContent(testBtnMessage);
  });

  test("Should be able to render the component with the correctly description parameter", () => {
    expect(screen.getByTestId(ModalTestId)).toHaveTextContent(testDescription);
  });

  test("Should be able to fire event", () => {
    fireEvent.click(screen.getByTestId(ModalButtonTestId));

    expect(handleClick).toHaveBeenCalled();
  });

  test("Should be able to close the component", () => {
    fireEvent.click(screen.getByTestId(ModalButtonTestId));

    expect(handleClick).toHaveBeenCalledWith(false);
  });
});
