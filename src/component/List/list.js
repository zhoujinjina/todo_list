import "./list.css"
function List(props) {
  const  {todo,deleteTodo,i,n,up}=props.all
  return (
    <div>
      <input type="checkbox" id="check" checked={todo.isCompleted} onChange={()=>up(i)}/>
      <input className={todo.isCompleted?"myText":null} type="text" value={todo.content} readOnly />
      <button  onClick={()=>deleteTodo(n)} style={{color:"black",backgroundColor:"red"}}>删除</button>
    </div>
  );
}

export default List;
