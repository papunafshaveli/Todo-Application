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
    { text: string; completed: boolean }[]
  >([]);

  const [showCompleted, setShowCompleted] = useState(false);
  console.log(todosArr);
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.length) {
      setTodosArr([...todosArr, { text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const handleDelete = (index: number) => {
    setTodosArr(todosArr.filter((_, i) => i !== index));
  };

  const handleComplete = (index: number) => {
    setTodosArr((prevTodos) => {
      const newTodosArr = [...prevTodos];
      newTodosArr[index] = {
        ...newTodosArr[index],
        completed: !newTodosArr[index].completed,
      };
      return newTodosArr;
    });
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
        {todosArr
          .filter((todo) => (showCompleted ? todo.completed : true))
          .map((todo, index) => (
            <TodoDiv key={index}>
              <CheckTodo
                completed={todo.completed}
                onClick={() => handleComplete(index)}
              >
                <div>
                  <img src="./resources/icon-check.svg" alt="" />
                </div>
                <p>{todo.text}</p>
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
        <button onClick={() => setShowCompleted(true)}>Completed</button>
      </StyledFooter>
    </AppContainer>
  );
}

export default App;
