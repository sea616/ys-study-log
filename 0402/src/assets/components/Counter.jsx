import { useState } from "react";

function Counter() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const n1 = Number(num1);
    const n2 = Number(num2);

    return (
        <div>
            <div>
                숫자 1:{" "}
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
            </div>

            <div>
                숫자 2:{" "}
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </div>

            <p>덧셈: {n1 + n2}</p>
            <p>뺄셈: {n1 - n2}</p>
            <p>곱셈: {(n1 * n2).toFixed(2)}</p>
            <p>
                나눗셈:{" "}
                {n2 !== 0 ? (n1 / n2).toFixed(2) : "0으로 나눌 수 없습니다"}
            </p>
        </div>
    );
}

export default Counter;