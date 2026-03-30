import React, { useState } from "react";

function UserInfo() {
  const [userName, setUserName] = useState("홍길동");
  const [userAge, setUserAge] = useState(25);
  const [userEmail, setUserEmail] = useState("hong@example.com");

  const handleName = (e) => {
    setUserName(e.target.value);
  };
  const handleAge = (e) => {
    setUserAge(e.target.value);
  };
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <>
      <span>이름: </span>
      <input type="text" value={userName} onChange={handleName} />
      <br />
      <span>나이: </span>
      <input type="number" value={userAge} onChange={handleAge} />
      <br />
      <span>이메일: </span>
      <input type="email" value={userEmail} onChange={handleEmail} />
      <br />

      <h3>프로필</h3>
      <p>
        {userName} ({userAge}세)
        <br />
        📧{userEmail}
      </p>
    </>
  );
}

export default UserInfo;
