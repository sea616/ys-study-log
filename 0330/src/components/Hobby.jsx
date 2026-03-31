import React, { useState } from "react";

function Hobby() {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedHobbies((prev) => [...prev, value]);
    } else {
      setSelectedHobbies((prev) =>
        prev.filter((item) => item !== value)
      );
    }
  };

  return (
    <>
      <input
        type="checkbox"
        value="reading"
        onChange={handleChange}
      />
      <label>독서</label>
      <br />

      <input
        type="checkbox"
        value="music"
        onChange={handleChange}
      />
      <label>음악</label>
      <br />

      <input
        type="checkbox"
        value="sports"
        onChange={handleChange}
      />
      <label>운동</label>
      <br />

      <input
        type="checkbox"
        value="coding"
        onChange={handleChange}
      />
      <label>코딩</label>

      <hr />

      <div>
        선택된 취미: {selectedHobbies.join(", ")}
      </div>
    </>
  );
}

// export default Hobby;

// import React, { useState } from "react";

// function Hobby() {
//   const [reading, setReading] = useState(false);
//   const [music, setMusic] = useState(false);
//   const [sports, setSports] = useState(false);
//   const [coding, setCoding] = useState(false);

//   return (
//     <>
//       <input
//         type="checkbox"
//         checked={reading}
//         onChange={(e) => setReading(e.target.checked)}
//       />
//       <label>독서</label>
//       <br />

//       <input
//         type="checkbox"
//         checked={music}
//         onChange={(e) => setMusic(e.target.checked)}
//       />
//       <label>음악</label>
//       <br />

//       <input
//         type="checkbox"
//         checked={sports}
//         onChange={(e) => setSports(e.target.checked)}
//       />
//       <label>운동</label>
//       <br />

//       <input
//         type="checkbox"
//         checked={coding}
//         onChange={(e) => setCoding(e.target.checked)}
//       />
//       <label>코딩</label>

//       <hr />

//       <div>
//         선택된 취미:{" "}
//         {[
//           reading && "reading",
//           music && "music",
//           sports && "sports",
//           coding && "coding",
//         ]
//           .filter(Boolean)
//           .join(", ")}
//       </div>
//     </>
//   );
// }

// export default Hobby;