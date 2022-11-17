# Two-way Binding

# Lifting State Up

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

```
  const [filteredYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
```

**Task 4:** Set up 2 ways blinding so the initial state of year 2020 will reflect when render Expenses.js component
  - passing `selected ={filteredYear}` as props in `ExpensesFilter`
  - accessing props in `ExpensesFilter` by using ` value={props.selected}` in select tag
  - now whatever is the initial State that set in `Expenses.js` will be reflected in broswer from `ExpenesesFilter` component

  # Stateless vs Statefull component
    - Dumb = presentational = stateless components => `ExpensesItem.js` has no state, it is there just to present data
    - Smart = statefull components = components that manages states
    - Note that those above are just terms used in React, dumb components does not mean it is negative or bad