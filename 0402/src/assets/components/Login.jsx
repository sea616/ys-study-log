import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            `로그인 시도!\n사용자: ${username}\n기억하기: ${remember ? "예" : "아니오"
            }`
        );

        setUsername("");
        setPassword("");
        setRemember(false);
    };

    const isDisabled = username === "" || password === "";

    return (
        <form onSubmit={handleSubmit}>
            <div>
                사용자명:{" "}
                <input
                    type="text"
                    placeholder="사용자명"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                비밀번호:{" "}
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div>
                <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                />
                로그인 상태 유지
            </div>

            <button type="submit" disabled={isDisabled}>
                로그인
            </button>
        </form>
    );
}

export default Login;