import React, { useEffect, useState } from "react";import { useGlobalContext } from "../../context/globalContext";
import IncomeItem from "../IncomeItem/IncomeItem";

export default function Trasactions() {
  const [totalTransactions, setTotalTransactions] = useState([]);
  const {
    incomes,
    expenses,
  } = useGlobalContext();

  const sortTransactionsByDate = (transactions) => {
    return transactions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  };

  useEffect(() => {
    const mergedArray = incomes.concat(expenses);
    const sortedArray = sortTransactionsByDate(mergedArray);
    setTotalTransactions(sortedArray);
  }, [expenses,incomes]);
  return (
    <div className="p-5 overflow-auto h-[80%]">
      <h1 className="my-2">History</h1>
      <div className="">
        {totalTransactions.map((income) => {
          const { id, title, amount, date, category, description, type } =
            income;
          return (
            <IncomeItem
              key={id}
              id={id}
              title={title}
              description={description}
              amount={amount}
              date={date}
              type={type}
              category={category}
              indicatorColor="var(--color-green)"
              deleteItem={false}
            />
          );
        })}
      </div>
    </div>
  );
}
