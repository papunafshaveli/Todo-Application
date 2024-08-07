import styled from "styled-components";

export const AppContainer = styled.div`
  min-width: 375px;
  max-width: 568px;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;

  .maxLengthMessage {
    color: red;
    padding: 10px 0 4px 15px;
    font-size: 1.3rem;
  }
`;

export const StyledForm = styled.form`
  input {
    width: 100%;

    padding: 15px;

    border: none;
    border-radius: 5px;
  }
`;

export const TodosContainer = styled.div`
  min-height: 65px;

  border-radius: 5px;

  margin-top: 30px;

  width: 100%;

  background-color: hsl(0, 0%, 98%);

  padding: 15px;
`;

export const TodoList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  background-color: white;
  padding: 10px;

  button {
    border: none;
    background-color: hsl(0, 0%, 98%);
    margin-left: 10px;
  }
`;

export const CheckTodo = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  div {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ completed }) =>
      completed
        ? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
        : "white"};
    border-radius: 50%;
  }

  p {
    font-size: 1.2rem;
    text-decoration: ${({ completed }) =>
      completed ? "line-through" : "none"};
  }
`;

export const TodoInfo = styled.div`
  border-radius: 5px;

  margin-top: 1px;

  display: flex;
  justify-content: space-between;

  padding: 15px;

  background-color: hsl(0, 0%, 98%);

  .clear {
    cursor: pointer;
  }
`;

export const StyledFooter = styled.footer<{ themes: boolean }>`
  display: flex;
  gap: 4px;

  border-radius: 5px;

  margin-top: 4px;

  padding: 15px;

  ${({ themes }) =>
    themes
      ? "background-color: hsl(236, 33%, 92%);"
      : "background-color: hsl(235, 52.94117647058824%, 13.333333333333334%)"};

  button {
    width: 100%;
    padding: 5px;
    cursor: pointer;
  }
`;
