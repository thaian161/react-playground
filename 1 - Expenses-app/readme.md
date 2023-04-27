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
- refactor both `Expenses` and `ExpensesList` components accordingly
  => semantically way to write logic in react

## 5: Adding Conditional Return Statements

```
 if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found No Expenses in {props.selected}</h2>
  }
```

## 6: Conditional rendering Add Expense Button || Expense Form

- in `NewExpense.js` add useState

```
const [isEditing, setIsEditing ]=useState(false);
```

- create `startEditingHandler` to handle onClick event on the Add New Expense button
- use conditional statement `&&` to rendering either the `<button>` or `ExpForm` accordingly to the State of `isEditing`
- now we need a `Cancel Button` in the `ExpForm`
- set the `<Button> Cancel </Button>` to `type="button` so when we hit the button, the form won't be submitted
- in `NewExpense.js`, create a `stopEditingHandler` function to set the state back to `setIsEditing(false)`
- how do we get to link the `stopEditingHandler` function from `NewExpense.js` and use it in the `ExpForm.js` component? using PROPS => create props `onCancelEditing`!!!
  **Step 1:** in `NewExpense.js` create a prop named `onCancelEditing` and point it to the `stopEditingHandler` function
  **Step 2:** access `onCancelEditing` in `ExpForm.js` by creating a `onClick` and point it to `{props.onCancelEditing}`

**NEW EXPENSE COMPONENT**

```
   const stopEditingHandler=()=>{
    setIsEditing(false);
  }

  {<ExpForm
      onCancelEditing ={stopEditingHandler}
   />}
```

**EXPENSE FORM COMPONENT**

```
<button type="button" onClick ={props.onCancelEditing} > Cancel </button>
```

- finally, we want to display the Add New Expense button after user submit AKA after user click on Add Expense button. We can set the state back to default `setIsEditing(false)`

```
 {!isEditing &&
    <button
      onClick ={startEditingHandler}> Add New Expense
    </button>
  }
```

## 7: Adding the Chart

**Task 1:** Set up Chart.js

- create 2 new components `Chart.js` and `ChartBar.js` in a new `Chart` folder under Components folder
- in `Chart` we will rendering a bunch of `ChartBar` based on the datapoints we have
- using `map` method to map over the array of datapoints and rendering `ChartBar` within `Chart` accordingly => we have to create dataPoints props in `ChartBar` and make sure every datapoint has a `value` property

**Chart.js**

```
{props.dataPoints.map( (datapoint) => (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={null}
        label={dataPoint.label} />
        ))
      }
```

- do not forget to add `key` when doing rendering list of data. Usually key can be used with and id, but in the case we can use label as the unique key as each label is unique without repetition `key={dataPoint.label}`

**Task 2:** Set up ChartBar.js

- hook up `{props.label}` to the chart-bar\_\_label div
- create function to showcase the % fill of the app => `barFillHeight`
- calculate % of the fill

```
barFillHeight = Math.round(props.value / props.maxValue + 100) + '%';
```

- setting `style` dynamically. we see 2 curly braces `style={{}}` because one curly braces is the syntax for the dynamic value, another curly braces is because that dynamic value is a Javascript Object which has also created with curly braces.
- when using CSS inline for `style={{}}`, there are 2 way to write it:

wrap everything in quote 'background-color'

```
style = {{ 'background-color' : 'blue'}}
```

or use camelCase backgroundColor

```
style = {{backgroundColor: 'blue'}}
```

**Task 3:** Set up ExpensesChart.js under Expense folder

- create new file named `ExpensesChart.js` under Expenses folder
- import `Chart.js` into `ExpensesChart`
- set up `dataPoints` by creating a `chartDataPoints` array, within the array we will have a bunch of objects since we expected to map the object out to `Chart component`
- look at filtered expenses, sum up expenses for all different months to assign it to our dataPoint
- iterate/looping thru `props.expenses`
- `date` object => using `.getMonth` method to extract the month from date object. Note, date object starting at 0, therefore January = 0, then Febuary = 1 and so on

```
for (const expense in props.expenses){
    const expenseMonth = expense.date.getMonth(); // starting at 0 => Jan = 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
```

- we already establish props.dataPoints in `Chart.js`, now it is time to hook up dataPoints into the `<Chart />`

**Task 4:** Calculate total maxValue in Chart.js component

- look at all the months and find the biggest value across all months => that would be represented in our chart
- transform dataPoint object to array of number by mapping it

```
const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value);
```

- [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) takes in a LIST OF AGRUMENTS not array, we need to use the [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to unpack them into standalone agruments

```
const totalMax = Math.max(...dataPointValues);
```

- replace dynamic value of `maxValue` from `{null}` to `{totalMax}`

**Task 5:** Use ExpensesChart.js in Expenses.js

- import `ExpensesChart` into `Expenses.js` and hook up `expenses props` to `{filteredExpenses}`

# Use Prettier on Command Line

1. Install `npm -g i prettier`
2. Run `prettier`
3. Format all file in project `prettier -w .`
4. Once done formatting, do 1 big commit for PR so it won't confuse whoever approve the PR

# Git Commit

Revise 1 commit (accidentally commit and want to un-commit) `git checkout .`
