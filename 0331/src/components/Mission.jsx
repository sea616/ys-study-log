import React, { useState, useEffect } from "react";

function Mission() {
  const [targetText, setTargetText] = useState("");
  const [inputText, setInputText] = useState("");
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    const text = prompt("문자열을 입력해주세요");
    setTargetText(text || "");

    setStartTime(Date.now());
  }, []);

//   useEffect(() => {
//     if (targetText && inputText === targetText) {
//       const endTime = Date.now();
//       const resultTime = endTime - startTime;

//       alert(`걸린 시간: ${resultTime} (ms)`);
//     }
//   }, [inputText, targetText, startTime]);

  return (
    <div>
      <h1>{targetText}</h1>

      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter") {
                if (targetText && inputText === targetText) {
                    const endTime = Date.now();
                    const resultTime = endTime - startTime;

                    alert(`걸린 시간: ${resultTime} (ms)`);
                }
            }
        }}
/>
    </div>
  );
}

export default Mission;