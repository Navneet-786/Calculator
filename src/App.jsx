import React, { useState } from "react";

import "./App.css";
const App = () => {
  const [input, setInput] = useState("");

  const calculateResultInput = (input) => {
    try {
      const operators = ["+", "-", "/", "*", "%"];
      let operator = null;
      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i];
          break;
        }
      }
      if (!operator) {
        setInput(parseFloat(input).toString());
        return;
      }
      const [operand1, operand2] = input.split(operator).map(parseFloat);
      let result;
      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-": {
          result = operand1 - operand2;
          break;
        }
        case "/": {
          result = operand1 / operand2;
          break;
        }
        case "*": {
          result = operand1 * operand2;
          break;
        }
        case "%": {
          result = operand1 % operand2;
          break;
        }
        default: {
          throw new Error("Invalid Operator");
        }
      }
      setInput(result.toString());
    } catch (err) {
      setInput("Error");
    }
  };

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "x") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      calculateResultInput(input);
    } else {
      setInput((prevValue) => prevValue + value);
    }
  };
  return (
    <div className="conatiner bg-slate-800  w-full min-h-screen h-screen flex justify-center items-center">
      <div className="bg-slate-500  w-full h-full md:w-[50%] lg:w-[28%] md:h-[90%]  md:rounded-lg">
        <div className="flex justify-end h-1/4 items-end text-4xl px-2 py-2 md:rounded-lg bg-slate-300 font-medium">
          {input}
        </div>
        <div className=" h-3/4 flex flex-wrap px-2 py-2 ">
          <div className="w-full flex justify-around  ">
            <button onClick={() => handleButtonClick("C")}>C</button>
            <button onClick={() => handleButtonClick("x")}>x</button>
            <button onClick={() => handleButtonClick("%")}>%</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
          </div>
          <div className="w-full flex justify-around">
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
          </div>
          <div className="w-full flex justify-around">
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
          </div>
          <div className="w-full flex justify-around">
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("+")}>+</button>
          </div>
          <div className="w-full flex justify-around">
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleButtonClick("00")}>00</button>
            <button onClick={() => handleButtonClick(".")}>.</button>
            <button onClick={() => handleButtonClick("=")}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
