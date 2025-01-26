import Contact from "../components/Contact";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
test("Should load contact page", () => {
  render(<Contact />);
  const header = screen.getByRole("heading");
  expect(header).toBeInTheDocument();
});
test("Should load Button", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});
test("Should render input field for 'name' using role", () => {
  render(<Contact />);
  const inputField = screen.getByText(/name/i);
  expect(inputField).toBeInTheDocument();
});
test("Should all input fields render", () => {
  render(<Contact />);
  const inputFields = screen.getAllByRole("textbox");
  expect(inputFields).toHaveLength(3);
});
