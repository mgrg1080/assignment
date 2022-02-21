import React, { useState } from "react";
import "./Calculator.css";
import Button from "../button/Button";

import Big from "big.js";

const Calculator = () => {
  const [firstNumber, setFirstNumnber] = useState("");
  const [secondNumber, setSecondNumnber] = useState("");
  const [result, setResult] = useState("");

  const calculate = (e) => {
    if (firstNumber === "" && secondNumber === "") {
      return;
    }
    let operation = e.target.innerText;

    let firstNo = new Big(firstNumber);

    if (operation === "+") {
      setResult(firstNo.plus(secondNumber).valueOf());
    } else if (operation === "-") {
      setResult(firstNo.minus(secondNumber).valueOf());
    } else if (operation === "*") {
      setResult(firstNo.times(secondNumber).valueOf());
    } else if (operation === "/") {
      setResult(firstNo.div(secondNumber).valueOf());
    }
  };

  return (
    <div className="calcWrapper">
      <div className="calcInputs">
        <label htmlFor="number1">Number 1</label>
        <input
          type="number"
          id="number1"
          placeholder="Enter Number"
          value={firstNumber}
          onChange={(e) => setFirstNumnber(e.target.value)}
        />

        <label htmlFor="number2">Number 2</label>
        <input
          type="number"
          id="number2"
          placeholder="Enter Number"
          value={secondNumber}
          onChange={(e) => setSecondNumnber(e.target.value)}
        />

        <span className="classInputs__result">Result : {result}</span>
      </div>
      <div className="calcBtns">
        <Button
          classStyle={"btnPrimary"}
          customStyle={{ padding: "5px 20px" }}
          text={"+"}
          onClick={calculate}
        />
        <Button
          classStyle={"btnPrimary"}
          customStyle={{ padding: "5px 20px" }}
          text={"-"}
          onClick={calculate}
        />
        <Button
          classStyle={"btnPrimary"}
          customStyle={{ padding: "5px 20px" }}
          text={"*"}
          onClick={calculate}
        />
        <Button
          classStyle={"btnPrimary"}
          customStyle={{ padding: "5px 20px" }}
          text={"/"}
          onClick={calculate}
        />
      </div>
    </div>
  );
};

export default Calculator;
