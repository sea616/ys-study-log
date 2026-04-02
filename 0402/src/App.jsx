import Counter from "./assets/components/Counter";
import TodoList from "./assets/components/TodoList";
import SelectItem from "./assets/components/SelectItem";
import Login from "./assets/components/Login";

function App() {
  return (
    <>

      {/* 1) 목록 컴포넌트 제작 */}
      <h2>할 일 목록</h2>
      <TodoList />
      <hr />

      {/* 2) 계산기 컴포넌트 제작 */}
      <h2>간단한 계산기</h2>
      <Counter />
      <hr />

      {/* 3) 선택 컴포넌트 제작 */}
      <h2>아이템 선택</h2>
      <SelectItem />
      <hr />

      {/* 4) 로그인 컴포넌트 제작 */}
      <h2>로그인 폼</h2>
      <Login />
    </>
  );
}

export default App;
