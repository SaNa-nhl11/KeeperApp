import React from "react";

function CreateArea(props) {

  const [note, notechanger] = React.useState({
    title: "",
    content: "",
  });

  function Set(event){
   const {name,value}=event.target;  //same as name = event.target.name etc//

    notechanger((prevNote)=>{
      return {...prevNote, [name]:value}  //[name] being either title or content depends on who triggered the event//
    })
  }

  function submitNote(event){
    props.onAdd(note);    //calling onAdd from app and passing note(what have been written) to it//
    notechanger({title:"",content:""});
    event.preventDefault(); //so the page doesn't refrech//
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={Set}/>
        <textarea name="content" placeholder="Take a note..." rows="3"  value={note.content} onChange={Set}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

