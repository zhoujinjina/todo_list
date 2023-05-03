import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header/header";
import List from "./component/List/list";
import PubSub from 'pubsub-js';
function App() {

  function deleteTodo(n) {
    let con = prompt("是否删除");
    if (con) {
      todos.splice(n, 1);
      setTodos([...todos]);
      console.log(todos);
    }
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
  function changevis(){
    setVisble([false])
    console.log("jjj")
    console.log(visble)
  }
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
  ])
  const [visble,setVisble]=useState(true)
  ;

  return (
    <div>
      
      <Header add={add} />
      {todos.map((todo, i) => (
        <List todo={todo} deleteTodo={deleteTodo} n={i} key={i} up={up} />
      ))}
    </div>
  );
}

export default App;
