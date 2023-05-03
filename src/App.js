import React, {useState } from "react";
import "./App.css";
import Header from "./component/Header/header";
import List from "./component/List/list";
// import PubSub from 'pubsub-js';
function App() {
  const [hidden, setHidden] = useState("none");
  const [todos, setTodos] = useState([
    {
      content: "Pick up dry cleaning",
      isCompleted: true,
    },
    {
      content: "Get haircut",
      isCompleted: true,
    },
    {
      content: "Build a todo app in React",
      isCompleted: false,
    },
  ]);
  const [n, setN] = useState();
  function deleteTodo(n) {
    setHidden("block");
    setN(n);
  }
  function add() {
    const button = document.getElementById("header");
    if (button.value) {
      let obj = { content: button.value, isCompleted: false };
      setTodos([...todos, obj]);
      button.value = null;
    }
  }
  function up(e) {
    todos[e].isCompleted = !todos[e].isCompleted;
    setTodos([...todos]);
    console.log(todos);
  }

  return (
    <div>
      <Header add={add} />
      {todos.map((todo, i) => (
        <List
          todo={todo}
          deleteTodo={deleteTodo}
          n={i}
          key={i}
          up={up}
      
        />
      ))}
      <div style={{ display: hidden, marginLeft: "40px" }}>
        <h2>是否要删除？</h2>
        <button
          onClick={() => {
            setHidden("none");
            todos.splice(n, 1);
            setTodos([...todos]);
           
          }}
        >
          删除
        </button>
        <button
          onClick={() => {
            setHidden("none");
          
          }}
          style={{ marginLeft: "10px" }}
        >
          取消
        </button>
      </div>
    </div>
  );
}

export default App;
