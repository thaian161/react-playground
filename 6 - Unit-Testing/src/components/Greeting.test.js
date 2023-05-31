import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

describe("Testing the <Greeting/> component", () => {
  test("render Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText(/Hello World/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render Hello World as a text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("It's good to see you!!!");
    expect(helloWorldElement).toBeInTheDocument();
  });
});
