import React from "react";
import errorImg from "../assets/error_1008930.png";
function Input({ label, id, name, value, onChange, errors }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        // ref={titleRef}
        value={value}
        onChange={onChange}
      />
      <p className="error">
        {errors && (
          <>
            <img className="errorImage" src={errorImg} alt="error" />
            {errors}
          </>
        )}
      </p>
    </div>
  );
}

export default Input;
