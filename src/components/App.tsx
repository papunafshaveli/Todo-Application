import { useEffect, useState } from "react";
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
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [inputText, setInputText] = useState("");
  const [todosArr, setTodosArr] = useLocalStorage<
    { text: string; completed: boolean }[]
  >("todos", []);

  const [filteredTodos, setFilteredTodos] = useState<
    { text: string; completed: boolean }[] | []
  >([]);

  const [themes, setThemes] = useState(true);

  useEffect(() => {
    setFilteredTodos(todosArr);
  }, [todosArr]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.length && inputText.length < 40) {
      setTodosArr([...todosArr, { text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const handleDelete = (index: number) => {
    setTodosArr(todosArr.filter((_, i) => i !== index));
  };

  const maxLengthMessage = "Please, add less than 40 characters";

  const handleOutlineComplated = (index: number) => {
    setTodosArr((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleFilterCompletedTodos = () => {
    setFilteredTodos(todosArr.filter((todo) => todo.completed !== false));
  };

  const handleFilterActiveTodos = () => {
    setFilteredTodos(todosArr.filter((todo) => todo.completed !== true));
  };

  const handleFilterAllTodos = () => {
    setFilteredTodos(todosArr);
  };

  useEffect(() => {
    document.body.style.backgroundImage = themes
      ? 'url("./resources/bg-desktop-light.jpg")'
      : 'url("./resources/bg-desktop-dark.jpg")';

    document.body.style.backgroundColor = themes
      ? "hsl(236, 33%, 92%)"
      : "hsl(235, 52.94117647058824%, 13.333333333333334%)";
  }, [themes]);

  return (
    <AppContainer>
      <Header themes={themes} setThemes={setThemes} />
      <StyledForm onSubmit={(e) => handleAddTodo(e)}>
        <input
          type="text"
          value={inputText}
          placeholder="Create a new todo"
          onChange={(e) => setInputText(e.target.value)}
        />
      </StyledForm>
      <TodosContainer>
        {filteredTodos.map((todo, index) => (
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
      <p className="maxLengthMessage">
        {inputText.length > 30 && maxLengthMessage}
      </p>
      <TodoInfo>
        <span>All items - {filteredTodos.length}</span>
        <span className="clear" onClick={() => setTodosArr([])}>
          Clear All
        </span>
      </TodoInfo>
      <StyledFooter themes={themes}>
        <button onClick={handleFilterAllTodos}>All</button>
        <button onClick={handleFilterActiveTodos}>Active</button>
        <button onClick={handleFilterCompletedTodos}>Completed</button>
      </StyledFooter>
    </AppContainer>
  );
}

export default App;
