import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, setCompleted, updateTodo } from "../../actions/todo";
import { todoListSelector } from "../../selectors";
import "./TodoList.css";

function TodoList() {
  const todoList = useSelector(todoListSelector);

  const dispatch = useDispatch();

  const updateInputElement = useRef();

  const handleCheck = (id) => {
    dispatch(setCompleted(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const [todoUpdateName, setTodoUpdateName] = useState("");
  const [todoUpdateId, setTodoUpdateId] = useState("");

  const handleUpdate = (todoName, todoId) => {
    updateInputElement.current.classList.add("show");
    updateInputElement.current.children[0].focus();
    setTodoUpdateName(todoName);
    setTodoUpdateId(todoId);
  };

  const handelCloseUpdate = () => {
    updateInputElement.current.classList.remove("show");
  };

  const handleChangeInput = (e) => {
    setTodoUpdateName(e.target.value);
  };

  const handlePressEnterKey = (e) => {
    if (e.keyCode === 13) {
      if (todoUpdateName.trim() === "") {
        handleDelete(todoUpdateId);
      }

      dispatch(updateTodo({ name: todoUpdateName.trim(), id: todoUpdateId }));
      handelCloseUpdate();
    }
  };

  return (
    <>
      <ul className="todo-list">
        {todoList.map((todo, index) => {
          return (
            <li className="todo-item" key={index}>
              <input
                type="checkbox"
                className="todo-item__checkbox"
                checked={todo.completed}
                id={todo.id}
                onChange={() => handleCheck(todo.id)}
              ></input>
              <label className="todo-item__label" htmlFor={todo.id}>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="todo-item__check-btn"
                />
              </label>
              <p className="todo-item__text">{todo.name}</p>
              <FontAwesomeIcon
                className="todo-item__update-btn"
                spellCheck="false"
                icon={faPenToSquare}
                onClick={() => handleUpdate(todo.name, todo.id)}
              />
              <FontAwesomeIcon
                className="todo-item__delete-btn"
                icon={faTrashCan}
                onClick={() => handleDelete(todo.id)}
              />
            </li>
          );
        })}
      </ul>
      <div className="update-todo" ref={updateInputElement}>
        <input
          className="update-todo__input"
          spellCheck="false"
          value={todoUpdateName}
          onChange={handleChangeInput}
          onKeyDown={handlePressEnterKey}
          onBlur={handelCloseUpdate}
        ></input>
        <button className="update-todo__close-btn" onClick={handelCloseUpdate}>
          Cancel
        </button>
      </div>
    </>
  );
}

export default TodoList;
