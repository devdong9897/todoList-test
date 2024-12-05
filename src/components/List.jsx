import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    // 배열의 모든 아이템(todo)을 순회하면서 todo.content.includes(search) 이 부분의 값이 참이 되는 부분만 필터링
    // content에는 "React 공부하기" 이러한 문자열이 들어가 있는데 여기에 includes메서드를 호출하게 되면 인수로 전달한 search값이
    // 문자열에 들어있는지 찾아서 있으면 true 없으면 false를 반환.
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {/* 기존 todos 대신 필터링된 todo값인 filteredTodos를 넣음 */}
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} />;
        })}
      </div>
    </div>
  );
};

export default List;
