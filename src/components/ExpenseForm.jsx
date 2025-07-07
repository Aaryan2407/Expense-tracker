import React, { useRef, useState } from "react";

export default function ExpenseForm({ setExpenses }) {
  // ✅ One Way of handling Form Data
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
  //   setExpenses((prevState) => [...prevState, expense]);
  //   e.target.reset();
  // };

  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // };

  //  ✅ Another Way of Handling Form Data
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  // const titleRef = useRef();
  // const categoryRef = useRef();
  // const amountRef = useRef();

  // const myRef = useRef();
  // console.log(myRef);
  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
      // {
      //   title: titleRef.current.value,
      //   categoryRef: categoryRef.current.value,
      //   amountRef: amountRef.current.value,
      //   id: crypto.randomUUID(),
      // }
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // ref={titleRef}
          value={expense.title}
          onChange={(e) =>
            setExpense((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          // ref={categoryRef}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          // ref={amountRef}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }))
          }
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
