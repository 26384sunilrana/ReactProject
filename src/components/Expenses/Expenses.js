import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filterYearSelected, setFilterYearSelected] = useState("2020");

  const expenseFilterChangeHandler = (yearSelected) => {
    setFilterYearSelected(yearSelected);
  };

  const yearWiseFilterExpense = props.expenses.filter(
    (filteredExpenses) =>
      filteredExpenses.date.getFullYear().toString() === filterYearSelected
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYearSelected}
          onExpenseFilterChange={expenseFilterChangeHandler}
        />
        {yearWiseFilterExpense.length === 0 && <p>NO Expense Found</p>}
        {yearWiseFilterExpense.length > 0 &&
          yearWiseFilterExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
