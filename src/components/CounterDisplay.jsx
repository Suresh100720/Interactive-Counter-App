import React from "react";

function CounterDisplay({ count }) {
  let displayColor = "gray";

  if (count > 0) displayColor = "green";
  else if (count < 0) displayColor = "red";

  return (
    <div className="counter-display" style={{ color: displayColor }}>
      {count}
    </div>
  );
}

export default CounterDisplay;