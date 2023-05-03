
function List(props) {
  let value=props.todo.isCompleted
  return (
    <div>
      <input type="checkbox" id="check" checked={value} onChange={()=>{props.up(props.n)}}/>
      <input type="text" value={props.todo.content} readOnly />
      <button  onClick={()=>props.deleteTodo(props.n)} style={{color:"black",backgroundColor:"red"}}>删除</button>
    </div>
  );
}

export default List;
