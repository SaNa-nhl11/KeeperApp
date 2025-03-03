import React from "react";

function Note(props) {

  function handleClick(){
    props.onDel(props.id);  //we call onDel from App and pass id to it//
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>  
    </div>
  );
}

export default Note;