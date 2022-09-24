import React from "react";
import Button from "./Button/Button";
import Screen from "./Screen/Screen";

class Calculator extends React.Component {
  render() {
    const { addDigit, calculate, clearCalc, inputValue } = this.props;
    return (
      <div className="calc">
        <Screen inputValue={inputValue} />
        <div className="row">
          <span></span>
          <Button onClick={() => clearCalc()} label="C" />
        </div>
        <div className="row">
          <Button onClick={() => addDigit(7)} label="7" />
          <Button onClick={() => addDigit(8)} label="8" />
          <Button onClick={() => addDigit(9)} label="9" />
          <Button onClick={() => addDigit("/")} label="/" />
        </div>
        <div className="row">
          <Button onClick={() => addDigit(4)} label="4" />
          <Button onClick={() => addDigit(5)} label="5" />
          <Button onClick={() => addDigit(6)} label="6" />
          <Button onClick={() => addDigit("*")} label="*" />
        </div>
        <div className="row">
          <Button onClick={() => addDigit(1)} label="1" />
          <Button onClick={() => addDigit(2)} label="2" />
          <Button onClick={() => addDigit(3)} label="3" />
          <Button onClick={() => addDigit("-")} label="-" />
        </div>
        <div className="row">
          <Button onClick={() => addDigit(0)} label="0" />
          <Button onClick={() => addDigit(",")} label="," />
          <Button onClick={() => calculate()} label="=" />
          <Button onClick={() => addDigit("+")} label="+" />
        </div>
      </div>
    );
  }
}

export default Calculator;
