import { useState } from "react";

function SelectItem() {
    const [selected, setSelected] = useState("");

    const fruits = ["사과", "바나나", "오렌지", "포도", "딸기"];

    return (
        <div>
            {fruits.map((fruit) => (
                <button
                    key={fruit}
                    onClick={() => setSelected(fruit)}
                    style={{ marginRight: "10px" }}
                >
                    {fruit}
                </button>
            ))}


            <p>선택된 과일: {selected || "없음"}</p>

            {selected && <p>🎉 {selected}을 선택하셨습니다!</p>}
        </div>
    );
}

export default SelectItem;