import './NewExpense.css';

import ExpForm from './ExpForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpForm onSaveExpenseData ={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
