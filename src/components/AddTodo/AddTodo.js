import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewTodo } from "../../actions/todo";
import { v4 as uuid } from "uuid";
import "./AddTodo.css";

function AddTodo() {
  const todoList = useSelector((state) => state.todo.list);
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
    addInputElement.current.focus();
  };

  const handlePressEnterKey = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="add-todo">
      <input
        className="add-todo__input"
        placeholder="Enter a Todo ..."
        spellCheck="false"
        value={inputValue}
        ref={addInputElement}
        onChange={handleChangeInput}
        onKeyDown={handlePressEnterKey}
      ></input>
      <button className="add-todo__btn" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
