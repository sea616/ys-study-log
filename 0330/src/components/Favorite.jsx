import React, { useState } from "react";

function Favorite() {
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleFruitChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");
  return (
    <>
      좋아하는 색상:
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="blue">파란색</option>
        <option value="red">빨간색</option>
        <option value="green">초록색</option>
        <option value="yellow">노란색</option>
      </select>
      <br />
      좋아하는 과일:
      <select value={selectedFruit} onChange={handleFruitChange}>
        <option value="apple">🍎사과</option>
        <option value="banana">🍌바나나</option>
        <option value="orange">🍊오렌지</option>
        <option value="grape">🍇포도</option>
      </select>
      <br />
      <span>선택한 색상: {selectedColor}</span>
      <br />
      <span>선택한 과일: {selectedFruit}</span>
    </>
  );
}

export default Favorite;
