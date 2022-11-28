# Styling React Components
    Conditional & Dynamic Styles
    Styled Components
    CSS Modules

## 1: Dynamic Inline Styles

## 2: Lifting State Up

From ExpensesFilter component to the parent component

**Task 1:** Listen to change of value on `ExpensesFilter` component > react to whenever a new "year" option is chosen

- add onChange event listener to select tag
- create function `dropdownChangeHandler` to listen to change in select tag, log to the console `event.target.value`

**Task 2:** Lifting State up from `ExpensesFilter` to `Expenses`

- import `ExpensesFilter` to `Expenses`
- forward event from child to parent component using event approach
- create function `filterChangeHandler` in `Expenses`
- in `<ExpenseFilter />` ,hook up event listener `onChangeFilter` point to `filterChangeHandler` function => `onChangeFilter` now can be used as props down in `ExpensesFilter`
- passing props in `ExpenseFilter` and using `props.onChangeFilter` in `dropdownChangeHandler` function => now we can forward the data from `event.target.value` to `Expeneses.js` component

**Task 3:** Save the selectedYear data in a State - import `useState` in `Expenses.js`

- initialize State as year 2020
- save the data `selectedYear` in `setFilterYear` state
