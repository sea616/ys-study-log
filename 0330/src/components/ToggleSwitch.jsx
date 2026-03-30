import React, { useState } from "react";

function ToggleSwitch() {
  const [contentChecked, setContentChecked] = useState(false);
  const [modeChecked, setModeChecked] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        id="chk1"
        checked={contentChecked}
        onChange={(e) => setContentChecked(e.target.checked)}
      />
      <label>콘텐츠 표시: {contentChecked ? "켜짐" : "꺼짐"}</label>
      <br />
      <input
        type="checkbox"
        id="chk2"
        checked={modeChecked}
        onChange={(e) => setModeChecked(e.target.checked)}
      />
      <label>다크모드: {modeChecked ? "🌙" : "☀️"}</label>

      {contentChecked ? <p>🎉 이 메시지는 조건부로 표시됩니다!</p> : ""}
    </>
  );
}

export default ToggleSwitch;
