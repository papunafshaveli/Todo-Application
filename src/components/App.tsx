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
  const [todosArr, setTodosArr] = useState<string[] | []>([]);

  const [completedTodos, setCompletedTodos] = useState<boolean[]>([]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.length) {
      setTodosArr([...todosArr, inputText]);
      setCompletedTodos([...completedTodos, false]);
      setInputText("");
    }
  };

  const handleDelete = (index: number) => {
    setTodosArr(todosArr.filter((_, i) => i !== index));
  };

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
              completed={completedTodos[index]}
              onClick={() => {
                const updatedCompletedTodos = [...completedTodos];
                updatedCompletedTodos[index] = !completedTodos[index];
                setCompletedTodos(updatedCompletedTodos);
              }}
            >
              <div>
                <img src="./resources/icon-check.svg" alt="" />
              </div>
              <p>{todo}</p>
            </CheckTodo>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
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
        <span>All</span>
        <span>Active</span>
        <span>Complated</span>
      </StyledFooter>
    </AppContainer>
  );
}

export default App;
