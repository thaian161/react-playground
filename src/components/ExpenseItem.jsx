import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2022, 8, 22);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 77;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>

      <div className="expense-item__description">
        <h2> {expenseTitle}</h2>
        <div className="expense-item__price"> ${expenseAmount} </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
