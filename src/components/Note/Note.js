import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React from 'react'
import swal from 'sweetalert';

import "./Note.css"

function Note({title, content, noteIndex}) {

  function deleteNote(){
    const notes = localStorage.getItem("notes")
    if (notes) {
        const temp = JSON.parse(notes);
        temp.splice(noteIndex, 1);
        localStorage.setItem("notes", JSON.stringify(temp))
    }

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this note!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your note has been deleted!", {
          icon: "success",
        });
        // triggers the useEffect in Home.js
        window.location.reload();

      } else {
        swal("Your note is safe!");
      }
    });
  }
  return (
    <div className="card-note">
        <h6 className='card-note-title'>{title}</h6>
        <p className='card-note-content'>{content}</p>
        <span className='delete-button' onClick={deleteNote}>❌</span>
    </div>
  )
}

export default Note