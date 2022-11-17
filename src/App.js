import Expenses from './components/Expense/Expenses';
import ExpensesFilter from './components/Expense/ExpensesFilter';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Skins Care',
      amount: 100.79,
      date: new Date(2022, 7, 14),
    },
    {
      id: 'e2',
      title: 'Macbook Pro',
      amount: 3999.99,
      date: new Date(2022, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 150,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'Winter Coat',
      amount: 490,
      date: new Date(2022, 5, 12),
    },
  ];

  return (
    <div>
      <ExpensesFilter />
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
