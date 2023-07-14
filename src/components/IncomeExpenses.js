import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((elem) => elem.amount);

    const income = (
        amounts
            .filter((item) => item > 0)
            .reduce((acc, rec) => (acc += rec), 0)
    );

    const expense = (
        amounts
            .filter((item) => item < 0)
            .reduce((acc, rec) => (acc += rec), 0) * -1
    );


    return (
        <div>
            <h4>Incomes</h4>
            <p className="money plus">{income}</p>
            <h4>Expenses</h4>
            <p className="money minus">{expense}</p>
        </div>
    );
};

export default IncomeExpenses;