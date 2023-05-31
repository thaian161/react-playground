# Different Kinds Of Automated Tests

### 1. Unit Tests

- **Test individual building blocks** - functions, components in isolation
- 1 project contain dozens or **hundreds of unit tests**
- Most/common important kind of test

### 2. Integration Tests

- **Test combination of multiple building blocks**
- 1 project contain **couple of integration tests**
- Also important but focus on unit tests in most cases

### 3. End to End Tests

- **Test a complete scenarios in your app as the user would experience** them
- 1 project typically contain only **a few E2E tests**
- Important but can also be done manually (partially)

### Required Tools and Setup

- **JEST:** We need a tool for running our tests and asserting results
- **REACT TESTING LIBRARY:** We need a tool for "simulating" (rendering) our components

  => Both tools are already set up when using create-react-app

### Naming convention for testing file

- `name of component`+.test.js => `App.test.ts` should be the test file for `App.js`

- `test` function takes in 2 arguments:
  1. **First argument**: `renders learn react link` is the test description, show up in test output
  2. **Second argument**: anonymous function contain the code that will be executed when run the test
     - `render` function import from @testing-library/react => render the App component
     - In the stimulated browser, find the text /learn react/
     - Finally check to see if the text /learn react/ is in the document or not

```
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

### How to run this test?

- Script for it in `package.json`
- Run `npm test`
- Choose a to run all tests

### Writing Tests: The Three "A"s

**1. ARRANGE:** set up test data, test conditions and test environment
**2. ACT:** run logic that should be tested (a button click to trigger a function?)
**3. ASSERT:** look at output, compare execution results with expected results

### Test Suites (describe func) vs Tests (test func)?

- We can group test into group by using `describe` function
- `describe` function take in 2 arguments
  1. **First argument**: `put whatever description you want here` is the test description, show up in test output
  2. **Second argument**: anonymous function contain all of the smaller `test` functions

```
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

```

### Testing User Interaction and State

- `userEvent` from `@testing-library/user-event` helps us trigger event in virtual screen
- `userEvent` has lots of built in func such as `click(), clear(), dbClick(), type(), hover()`

```
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
```

- `screen.queryByText` will return `null` if not found

```
test("NOT renders ' It's good to see you!!!' if the button WAS NOT CLICKED", () => {
    // Arrange
    render(<Greeting />);

    //Act - use user-event package
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputButtonWasClicked = screen.queryByText(
      "It's good to see you!!!",
      {
        exact: false,
      }
    );
    expect(outputButtonWasClicked).toBeNull();
  });
```

### Testing Connected Components

- Using `Output` component
- Our testing still works as `Output` still act as <p> to rendering text on screen

### Testing Asynchronous Code

- Using `Async` component
- If we have multiple `posts`, we have to use `getAllByRole`
- `getByRole` will fails if we have more than 1 post
- Helpful link to know when to use "listitem" for function `getAllByRole`: https://www.w3.org/TR/html-aria/#docconformance
- To check if the array is not empty, use `.not.toHaveLength(0);`
- Error message: _Unable to find an accessible element with the role "listitem"_
  - Why? because screen will immediately look for listitem, but the true is we need to have the HTTP request success to see all posts
  - Why? because on the first render, the state initialize with an empty array, screen won't be able to find listitem until the second render
  - In this case, we are going to use `findAllByRole`, this function will return a PROMISE, and the testing library will re-evaluate the component a couple of more time to find listitem
