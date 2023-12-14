import { useState } from "react";
import "../App.css";
import {
  AppContainer,
  CheckTodo,
  StyledForm,
  TodoDiv,
  TodoInfo,
  TodosContainer,
} from "./AppStyles";
import Header from "./Header/Header";
import styled from "styled-components";

function App() {
  const [inputText, setInputText] = useState("");
  const [todosArr, setTodosArr] = useState<string[] | []>([]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.length) {
      setTodosArr([...todosArr, inputText]);
      setInputText("");
    }

    console.log("handleAdd");
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
            <CheckTodo>
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

const StyledFooter = styled.footer`
  border-radius: 5px;

  margin-top: 4px;

  display: flex;
  justify-content: space-between;

  padding: 15px;

  background-color: hsl(0, 0%, 98%);
`;
