import React, { useState } from 'react';
import './App.css';

function CalcButton({ label, onClick, buttonClassName = "CalcButton", style = {} }) {
  const whiteBackgroundLabels = ["9", "8", "7", "6", "5", "4", "3", "2", "1","0"];

  const finalClassName = whiteBackgroundLabels.includes(label.toString())
    ? `CalcButton ${buttonClassName} WhiteBackground`
    : `CalcButton ${buttonClassName}`;

  return (
    <button className={finalClassName} onClick={onClick} style={style}>
      {label}
    </button>
  );
}

function CalcDisplay({ display }) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

export default function App() {
  const [disp, setDisp] = useState("0");
  const [num1, setNum1] = useState("");
  const [oper, setOper] = useState("");
  const [num2, setNum2] = useState("");

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    let num = value;
    if (oper === "") {
      num = num1 + num;
      setNum1(num);
    } else {
      num = num2 + num;
      setNum2(num);
    }
    setDisp(num);
  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);
  }

  const clearClickHandler = (e) => {
    e.preventDefault();
    setDisp("0");
    setNum1("");
    setOper("");
    setNum2("");
  }

  const equalClickHandler = (e) => {
    e.preventDefault();

    if (num1 && num2) {
      switch (oper) {
        case "+":
          setDisp(String(parseFloat(num1) + parseFloat(num2)));
          break;
        case "-":
          setDisp(String(parseFloat(num1) - parseFloat(num2)));
          break;
        case "*":
          setDisp(String(parseFloat(num1) * parseFloat(num2)));
          break;
        case "÷":
          if (parseFloat(num2) === 0) {
            setDisp("ERROR");
          } else {
            setDisp(String(parseFloat(num1) / parseFloat(num2)));
          }
          break;
        default:
          setDisp("ERROR");
      }
    } else {
      setDisp("ERROR");
    }
    setNum1("");
    setOper("");
    setNum2("");
  }

  const showNameClickHandler = (e) => {
    e.preventDefault();
    setDisp("TALIDONG");
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <h1>Calculator of John Patrick Talidong - IT3A</h1>
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={9} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={8} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={7} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={"+"} onClick={operatorClickHandler} />
          <CalcButton label={6} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={5} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={4} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={"-"} onClick={operatorClickHandler} />
          <CalcButton label={3} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={2} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={1} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={"*"} onClick={operatorClickHandler} />
          <CalcButton label={"C"} onClick={clearClickHandler} />
          <CalcButton label={0} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={"="} onClick={equalClickHandler} />
          <CalcButton label={"÷"} onClick={operatorClickHandler} />
        </div>
        <div className="Name">
          <CalcButton label={"TALIDONG"} onClick={showNameClickHandler} buttonClassName={"CalcButtonName"} style={{ margin: "10px 0" }} />
        </div>
      </div>
    </div>
  );
}
