import React, {useState} from "react";
import './NewExpense.css';
import ExpenseFrom from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setisEditing] = useState(false);
    
    const startEdtingHandler = () => {
        setisEditing(true);
    };

    const stopEdtingHandler = () =>{       
        setisEditing(false);
    };   

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }      
      props.onAddExpense(expenseData);
      setisEditing(false);
    };   

   

  return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEdtingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseFrom onCancel={stopEdtingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;
