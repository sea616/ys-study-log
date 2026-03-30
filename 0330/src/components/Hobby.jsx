import React, { useState } from "react";

function Hobby() {
  const [contentChecked, setContentChecked] = useState(false);
  //   const [modeChecked, setModeChecked] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        id="reading"
        value="reading"
        checked={contentChecked}
        onChange={(e) => setContentChecked(e.target.checked)}
      />
      <label>독서</label>
      <br />
      <input
        type="checkbox"
        id="reading"
        value="reading"
        checked={contentChecked}
        onChange={(e) => setContentChecked(e.target.checked)}
      />
      <label>음악</label>
      <br />
      <input
        type="checkbox"
        value="music"
        checked={contentChecked}
        onChange={(e) => setContentChecked(e.target.checked)}
      />
      <label>운동</label>
      <br />
      <input
        type="checkbox"
        id="sports"
        value="sports"
        checked={contentChecked}
        onChange={(e) => setContentChecked(e.target.checked)}
      />
      <label>코딩</label>
    </>
  );
}

export default Hobby;
