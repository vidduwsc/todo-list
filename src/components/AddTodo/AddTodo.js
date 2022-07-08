import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addNewTodo } from "../../actions/todo";
import { todoListSelector } from "../../selectors";
import "./AddTodo.css";

function AddTodo() {
  const todoList = useSelector(todoListSelector);
  const dispatch = useDispatch();

  const addInputElement = useRef();

  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      setInputValue("");
      return;
    }
    dispatch(
      addNewTodo({
        id: uuid(),
        name: inputValue.trim(),
        completed: false,
      })
    );
    setInputValue("");
  };

  const handlePressEnterKey = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
    return;
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="add-todo">
      <input
        className="add-todo__input"
        placeholder="Enter a Todo ..."
        value={inputValue}
        ref={addInputElement}
        onChange={handleChangeInput}
        onKeyDown={handlePressEnterKey}
        spellCheck="false"
      />
      <button className="add-todo__btn" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
