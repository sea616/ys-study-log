import React from "react";

function Counter() {
  const [number, setNumber] = React.useState(0);

  const handleIncrease = () => {
    //number++;
    setNumber(number + 1);
  };
  const handleDecrease = () => {
    setNumber((prev) => prev - 1);
  };
  const handleReset = () => {
    setNumber(0);
  };

  return (
    <>
      카운트: <b>{number}</b>
      <br />
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleReset}>초기화</button>
      <button onClick={handleDecrease}>-1</button>
    </>
  );
}

export default Counter;
