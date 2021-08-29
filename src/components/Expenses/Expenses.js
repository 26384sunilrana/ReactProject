import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
       <ExpensesList yearWiseFilterExpense = {yearWiseFilterExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;
