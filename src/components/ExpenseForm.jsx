import React, { useRef, useState } from "react";
import errorImg from "../assets/error_1008930.png";
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
  const [errors, setError] = useState({});
  // const titleRef = useRef();
  // const categoryRef = useRef();
  // const amountRef = useRef();

  // const myRef = useRef();
  // console.log(myRef);

  const validate = (formData) => {
    const errorsData = {};
    if (!formData.title) {
      errorsData.title = "Title is required";
    }
    if (!formData.category) {
      errorsData.category = "Category is required";
    }
    if (!formData.amount) {
      errorsData.amount = "Amount is required";
    }

    setError(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateExpenseError = validate(expense);
    if (Object.keys(validateExpenseError).length) {
      return console.log("Form is invalid");
    }
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError({});
  };

  //  handle change is used to replace logic below used on every form field
  // onChange={(e) =>
  //           setExpense((prevState) => ({ ...prevState, title: e.target.value }))
  //         }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          // ref={titleRef}
          value={expense.title}
          onChange={handleChange}
        />
        <p className="error">
          {errors.title && (
            <>
              <img className="errorImage" src={errorImg} alt="error" />
              {errors.title}
            </>
          )}
        </p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          // ref={categoryRef}
          onChange={handleChange}
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
        <p className="error">
          {errors.category && (
            <>
              <img className="errorImage" src={errorImg} alt="error" />
              {errors.category}
            </>
          )}
        </p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={expense.amount}
          // ref={amountRef}
          onChange={handleChange}
        />
        <p className="error">
          {errors.amount && (
            <>
              <img className="errorImage" src={errorImg} alt="error" />
              {errors.amount}
            </>
          )}
        </p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}
