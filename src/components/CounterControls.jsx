import React from "react";
import Button from "./Button";

function CounterControls({ onIncrement, onDecrement, onReset }) {
  return (
    <div className="controls-container">
      <Button label="Increment" onClick={onIncrement} />
      <Button label="Decrement" onClick={onDecrement} />
      <Button label="Reset" onClick={onReset} />
    </div>
  );
}

export default CounterControls;