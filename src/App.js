import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header/header";
import List from "./component/List/list";  
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
    console.log(todos,e);
    todos[e].isCompleted = !todos[e].isCompleted;
    setTodos([...todos]);
  
  }

  return (
    <div>
      <Header add={add} />
      {todos.map((todo, i) => (
        <List key={i} all={{ todo, deleteTodo, i,n, up }} />
      ))}
      <div style={{ display: hidden, marginLeft: "40px" ,border:"1px black solid",width:"150px",height:"130px",boxShadow:"2px 2px 10px 0.5 black " }}>
     <div style={{textAlign:"center"}}>
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
    </div>
  );
}

export default App;
