# React State & Working With Events

## 1: Two-way Binding

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

## => Summary:

**_How can we communicate from one of our components to a parent/higher lever components?_**
We can accept a function via props and call it from inside the lower level (child) component to then trigger some action in the parent component which passed the function

**_Why do we need extra state instead of just using regular JS vbariables?_**
Bc standard JS cariables don't cause React components to be re-evaluated > calling useState will update state value

## 3: Stateless vs Statefull component

- Dumb = presentational = stateless components => `ExpensesItem.js` has no state, it is there just to present data
- Smart = statefull components = components that manages states
- Note that those above are just terms used in React, dumb components does not mean it is negative or bad

  <br>

---

# Rendering Lists & Conditional Content - working with dynamic content

## 1: Rendering Lists of Data

- in `Expenses.js`, our `ExpenseItem` is not dynamic. In real life, we don't know in advance how many ExpenseItem will be rendering in the app => we need to rendering list of ExpensesItem dynamically
- use an array method [array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- dynamic change the hard code of

```
<ExpenseItem
  title={props.items[0].title}
  amount={props.items[0].amount}
  date={props.items[0].date}
/>
<ExpenseItem
  title={props.items[1].title}
  amount={props.items[1].amount}
  date={props.items[1].date}
/>
```

to rendering lists of data using map()

```
{props.items.map((expense) => (
  <ExpenseItem
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
))}
```

## 2: Using Statefull Lists

The goal of this section is to dynamic update expenses items when user filter the year or add more items to the app

- move the expense array out of App.js, rename the array to DUMMY_EXPENSES
- import useState to App.js
- set up useState, use DUMMY_EXPENSES as initial state

```
  const [ expenses, setExpenses] = useState(DUMMY_EXPENSES);
```

- create function `addExpenseHandler` and save new state to setExpenses

```const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
```

- having props `onAddExpense` point to function `addExpenseHandler` in NewExpense component
-

## 3: Understanding "KEYS"

- add `key={expense.id}` to `props.items.map` in `Expenses.js` component => help react identify the individual items in your rendering lists

## 4: Implement Filter function

- in `Expenses.js` add `filteredExpenses`
- use [.filter method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to filter all items - props.items
- call method `.getFullYear` on the Date Object then convert to string using `toString()` medthod > because the year is a string - line 9 useState('2020')
- now as we have the `filteredExpenses` function, replace `props.items.map` to `filteredExpenses.map`

## 4: Rendering Conditional Content

- using the syntax of `condition ? true : false`

```
{filteredExpenses.length === 0 ? (
          <p>No Expenses Found In {filteredYear}</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
```
- however, the code above is too long and hard to read. We can split it into 2 stand alone expressions like the below:
```
{filteredExpenses.length === 0 && ( <p>No Expenses Found In {filteredYear} </p> )}

{filteredExpenses.length > 0 &&
 filteredExpenses.map((expense) => (
   <ExpenseItem
   key={expense.id}
   title={expense.title}
   amount={expense.amount}
   date={expense.date}
  />
))}
```
- this is good but still long and hard to read, let's refactor it using a new variabl called `filterExpenseContent`

```
let filterExpenseContent = <p> No Expenses Found In {filteredYear}</p>;

if (filteredExpenses.length > 0) {
  filterExpenseContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}

then rendering it as {filterExpenseContent}
```

## 4: Adding Conditional Return Statements
- the Expenses.js is good but it is pretty long, we can seperate it into another component, let's called it `ExpensesList.js`
- moving the `filterExpenseContent` logic from `Expenses.js` to `ExpensesList.js`

