import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Testing Async Component", () => {
  test("renders posts if request success", () => {
    // Arrange
    render(<Async />);

    // Action

    //Assert
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
