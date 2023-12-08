import React from "react";

const FormConverter = () => {
  const hundleSubmit = (e) => {
    e.preventDefault();
    const { currency } = e.currentTarget.elements;
    const [amount, from, to] = currency.value.split(" ");
    console.log("to: ", to);
    console.log("from: ", from);
    console.log("amount: ", amount);
  };

  return (
    <div>
      <form onSubmit={hundleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            placeholder="15 USD UAH"
            name="currency"
            required
          />
        </label>
        <button type="submit">Convert</button>
      </form>
    </div>
  );
};

export default FormConverter;
