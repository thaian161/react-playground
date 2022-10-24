import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 77, date: new Date(2022, 7, 22) },
    { title: 'Grocery Shopping', amount: 100, date: new Date(2022, 8, 22) },
    { title: 'Skin Cares', amount: 150, date: new Date(2022, 8, 22) },
    { title: 'Gym Membership', amount: 15, date: new Date(2022, 8, 22) },
  ];

  return (
    <div>
      <h2>Expense App</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
