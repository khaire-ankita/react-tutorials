import React, { useState } from "react";

function Input() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [total, setTotal] = useState(0);

  function Operations(Operation) {
    switch (Operation) {
      case "add":
        setTotal(num1 + num2);
        break;
      case "subtract":
        setTotal(num1 - num2);
        break;
      case "multiply":
        setTotal(num1 * num2);
        break;
      case "divide":
        setTotal(num1 / num2);
        break;
      default:
        setTotal(0);
    }
  }
  return (
    <div>
      <h2>Basic Calculator</h2>
      <input
        type="number"
        placeholder="First Input"
        value={num1}
        onChange={(e) => setNum1(+e.target.value)}
      />
      <input
        type="number"
        placeholder="Second Input"
        value={num2}
        onChange={(e) => setNum2(+e.target.value)}
      />
      <div class="calculator">
      <button onClick={() => Operations('add')}>+</button>
      <button onClick={() => Operations('subtract')}>-</button>
      <button onClick={() => Operations('multiply')}>*</button>
      <button onClick={() => Operations('divide')}>/</button>
      </div>
      <input type="number" placeholder="Output" value={total} />
    </div>
  );
}
export default Input;
