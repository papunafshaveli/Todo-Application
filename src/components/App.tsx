import { useState } from "react";
import "../App.css";
import {
  AppContainer,
  CheckTodo,
  StyledFooter,
  StyledForm,
  TodoDiv,
  TodoInfo,
  TodosContainer,
} from "./AppStyles";
import Header from "./Header/Header";

function App() {
  const [inputText, setInputText] = useState("");
  const [todosArr, setTodosArr] = useState<
    { text: string; completed: boolean }[] | []
  >([]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.length) {
      setTodosArr([...todosArr, { text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const handleOutlineComplated = (index: number) => {
    setTodosArr((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (index: number) => {
    setTodosArr(todosArr.filter((_, i) => i !== index));
  };

  const handleFilterCompletedTodos = () => {setTodosArr(todosArr.filter((todo) => todo.completed !== false))};

  return (
    <AppContainer>
      <Header />
      <StyledForm onSubmit={(e) => handleAddTodo(e)}>
        <input
          type="text"
          value={inputText}
          placeholder="Create a new todo"
          onChange={(e) => setInputText(e.target.value)}
        />
      </StyledForm>
      <TodosContainer>
        {todosArr.map((todo, index) => (
          <TodoDiv key={index}>
            <CheckTodo
              completed={todo.completed}
              onClick={() => handleOutlineComplated(index)}
            >
              <div>
                <img src="./resources/icon-check.svg" alt="" />
              </div>
              <p>{todo.text}</p>
            </CheckTodo>
            <button onClick={() => handleDelete(index)}>
              <img src="./resources/icon-cross.svg" alt="" />
            </button>
          </TodoDiv>
        ))}
      </TodosContainer>
      <TodoInfo>
        <span>5 items left</span>
        <span>Clear complated</span>
      </TodoInfo>
      <StyledFooter>
        <button>All</button>
        <button>Active</button>
        <button onClick={handleFilterCompletedTodos}>Completed</button>
      </StyledFooter>
    </AppContainer>
  );
}

export default App;
