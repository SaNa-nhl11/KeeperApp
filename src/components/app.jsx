import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [Notes,NotesSeter] = React.useState([]);  //Array of notes//

    function Addnote(note){
        NotesSeter((prevNotes)=>{
            return [...prevNotes,note]
        }); 
    }

    function deletenote(id){
        NotesSeter((prevnotes)=>{
            return prevnotes.filter((item,index)=>{ //returning the notes list without the matched item//
                return index !== id; //returns all items except the one who matches the id//
            })
        });
    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={Addnote}/>

       {Notes?.map((x,index)=>{  //to loop each item in the Notes array using x//
        return <Note key={index} id={index} title={x.title} content={x.content} onDel={deletenote}/> //creating notes using the title and content of each item//
       })}

      <Footer />
    </div>
  );
}

export default App;
