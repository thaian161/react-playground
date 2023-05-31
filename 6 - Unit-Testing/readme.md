# Different Kinds Of Automated Tests

### 1. Unit Tests

- **Test individual building blocks** - functions, components in isolation
- 1 project contain dozens or **hundreds of unit tests**
- Most/common important kind of test

### 2. Integration Tests

- **Test combination of multiple building blocks**
- 1 project contain **couple of integration tests**
- Aslo important but focus on unit tests in most cases

### 3. End to End Tests

- **Test a complete scenarios in your app as the user would experience** them
- 1 project typically contain only **a few E2E tests**
- Important but can also be done manually (partially)

### Required Tools and Setup

- **JEST:** We need a tool for running our tests and asserting results
- **REACT TESTIN LIBRARY:** We need a tool for "simulating" (rendering) our components

  => Both tools are already set up when using create-react-app

### Naming convention for testing file

- `name of component`+.test.js => `App.test.ts` should be the test file for `App.js`

- Testing function takes in 2 agruments:
  1. **First agrument**: `renders learn react link` is the test decription, show up in test output
  2. **Second agrument**: anonymous function contain the code that will be executed when run the test
     - `render` function import from @testing-library/react => render the App component
     - In the stimulated browswer, find the text /learn react/
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
