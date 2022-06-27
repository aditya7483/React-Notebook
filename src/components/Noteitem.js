import React ,{useContext}from "react";
import noteContext from '../context/notes/NoteContext.js'

const Noteitem = (props) => {
  const context = useContext(noteContext)
  const{deleteNote,editNote}=context
  const { note,updateNote } = props;
  const handleOnClick=()=>{
    console.log("clicked")
    deleteNote(note._id)
  }
  const handleEdit=()=>{
    updateNote(note)
  }
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
            <h5 className="card-title"> {note.title}</h5>
              <i className="fa-solid fa-pen-to-square mx-2" onClick={handleEdit}></i>
              <i className="fa-solid fa-trash-can mx-2" onClick={handleOnClick}></i>
            </div>
            

            <p className="card-text"> {note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
