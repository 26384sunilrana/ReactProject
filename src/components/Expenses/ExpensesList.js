import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList =props => {
    if(props.yearWiseFilterExpense.length === 0 ){
        return <h2 className="expenses-list__fallback " >NO Expense Found</h2>;
    }
     return props.yearWiseFilterExpense.map((expense) => (
        <ul className="expenses-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        </ul>
      ));
    };

export default ExpensesList;