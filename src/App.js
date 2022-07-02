import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5JBb_QfFhKqC8dcAIoYPmQfFFtggQyOQ",
  authDomain: "todo-list-1807vd.firebaseapp.com",
  projectId: "todo-list-1807vd",
  storageBucket: "todo-list-1807vd.appspot.com",
  messagingSenderId: "343844414502",
  appId: "1:343844414502:web:4fa0308b9d69dfe5adb2e7",
  measurementId: "G-LRLJVPPMJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
