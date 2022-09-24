import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const OPERATORS = ["+", "-", "*", "/"];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldNumber: 0,
      currentNumber: 0,
      currentOperator: null,
      inputValue: 0,
    };
  }

  addDigit = (value) => {
    const { inputValue } = this.state;

    if (DIGITS[value]) {
      this.setState({
        inputValue: String(inputValue + value),
        currentNumber: String(inputValue + value),
      });
      return;
    }
    if (value === "," && inputValue.length > 0 && !inputValue.includes(".")) {
      this.setState({
        inputValue: inputValue + ".",
        currentNumber: inputValue + ".",
      });
      return;
    }
    if (OPERATORS.includes(value)) {
      this.setState({
        inputValue: "",
        oldNumber: inputValue,
        currentOperator: value,
      });
      return;
    }
  };

  calculate() {
    if (this.state.currentOperator === "+") {
      this.setState({
        inputValue:
          Number(this.state.oldNumber) + Number(this.state.currentNumber),
      });
    }
    if (this.state.currentOperator === "-")
      this.setState({
        inputValue:
          Number(this.state.oldNumber) - Number(this.state.currentNumber),
      });
    if (this.state.currentOperator === "*")
      this.setState({
        inputValue:
          Number(this.state.oldNumber) * Number(this.state.currentNumber),
      });
    if (this.state.currentOperator === "/") {
      if (this.state.inputValue === 0) {
        this.setState({
          inputValue: "",
        });
      } else {
        this.setState({
          inputValue:
            Number(this.state.oldNumber) / Number(this.state.currentNumber),
        });
      }
    }
  }

  clearCalc() {
    this.setState({
      inputValue: 0,
      oldNumber: 0,
      currentNumber: 0,
      currentOperator: null,
    });
  }

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      const { key } = event;
      const { inputValue } = this.state;
      if (key === "Enter") {
        this.calculate();
        return;
      }
      // Converts , into .
      if (key === ",") {
        this.addDigit(",");
        return;
      }
      if (DIGITS[key]) {
        this.addDigit(Number(key));
        return;
      }
      if (OPERATORS.includes(key)) {
        this.addDigit(key);
        return;
      }
      if (key === "Backspace") {
        this.setState({
          inputValue: inputValue.slice(0, -1),
        });
        return;
      }
      if (key === "c") {
        this.clearCalc();
        return;
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Calculator
          oldNumber={this.state.oldNumber}
          inputValue={this.state.inputValue}
          currentNumber={this.state.currentNumber}
          addDigit={(e) => this.addDigit(e)}
          clearCalc={() => this.clearCalc()}
          calculate={() => this.calculate()}
        />
      </div>
    );
  }
}

export default App;
