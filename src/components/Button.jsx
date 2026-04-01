import React from "react";

function Button({ label, onClick }) {
  return (
    <button className="btn-style" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;