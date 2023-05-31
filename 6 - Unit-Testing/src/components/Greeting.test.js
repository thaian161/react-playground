import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Testing the <Greeting/> component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText(/Hello World/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you!!! as a text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("It's good to see you!!!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders You just changed the text! if the button WAS CLICKED", () => {
    // Arrange
    render(<Greeting />);

    //Act - use user-event package
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputButtonWasClicked = screen.getByText(
      "You just changed the text",
      { exact: false }
    );
    expect(outputButtonWasClicked).toBeInTheDocument();
  });
});
