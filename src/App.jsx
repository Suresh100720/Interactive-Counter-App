import React, { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";

function App() {
  const [countValue, setCountValue] = useState(0);
  const [stepAmount, setStepAmount] = useState(1);

  const incrementHandler = () => {
    setCountValue(prevValue => prevValue + stepAmount);
  };

  const decrementHandler = () => {
    setCountValue(prevValue => prevValue - stepAmount);
  };

  const resetHandler = () => {
    setCountValue(0);
  };

  return (
    <div className="app-container">
      <h1>Interactive Counter</h1>

      <CounterDisplay count={countValue} />

      <div className="step-section">
        <label>Step: </label>
        <input
          type="number"
          value={stepAmount}
          onChange={(event) =>
            setStepAmount(Number(event.target.value) || 1)
          }
        />
      </div>

      <CounterControls
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
        onReset={resetHandler}
      />
    </div>
  );
}

export default App;