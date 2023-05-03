import "../Header/header.css";
function Header(props) {
  function addEnter(e){
        console.log(e.key)
        if(e.key==="Enter"){
            props.add()
        }
  }
  return (
    <div>
      <input type="text" id="header" onKeyDown={addEnter} />
      <button onClick={props.add}>添加</button>
    </div>
  );
}

export default Header;
