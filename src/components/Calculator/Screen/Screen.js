import React from "react";

const Screen = ({ inputValue }) => {
  return (
    <div className="row">
      <input type="text" className="calc-input" value={inputValue} />
    </div>
  );
};

export default Screen;
