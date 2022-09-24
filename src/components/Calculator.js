import React from "react";

class Calculator extends React.Component {
  render() {
    return (
      <div className="calc">
        <div className="row">
          <input
            type="text"
            className="calc-input"
            value={this.props.inputValue}
          />
        </div>
        <div className="row">
          <span></span>
          <button onClick={() => this.props.clearCalc()}>C</button>
        </div>
        <div className="row">
          <button onClick={() => this.props.addDigit(7)}>7</button>
          <button onClick={() => this.props.addDigit(8)}>8</button>
          <button onClick={() => this.props.addDigit(9)}>9</button>
          <button onClick={() => this.props.addDigit("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => this.props.addDigit(4)}>4</button>
          <button onClick={() => this.props.addDigit(5)}>5</button>
          <button onClick={() => this.props.addDigit(6)}>6</button>
          <button onClick={() => this.props.addDigit("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => this.props.addDigit(1)}>1</button>
          <button onClick={() => this.props.addDigit(2)}>2</button>
          <button onClick={() => this.props.addDigit(3)}>3</button>
          <button onClick={() => this.props.addDigit("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => this.props.addDigit(0)}>0</button>
          <button onClick={() => this.props.addDigit(",")}>,</button>
          <button onClick={() => this.props.calculate()}>=</button>
          <button onClick={() => this.props.addDigit("+")}>+</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
