import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <h1 className="heading">Todo List</h1>
          <AddTodo />
          <TodoList />
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;
