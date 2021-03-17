import {ListGroup, ListGroupItem} from 'reactstrap';
import Note from './Note'
import React from 'react';

const ListNotes =({notes,handleItemClick})=>{
    console.log('Recieved Data to ListNotes',notes);
    let notes_list = notes.map((note)=>{
        return(
            <ListGroupItem key = {note.id} href = '#' onClick = {(id)=>handleItemClick(note.id)} > 
                <Note title={note.title}></Note>
            </ListGroupItem>
        )
    })

    return (
        <ListGroup>
            {notes_list}
        </ListGroup>
    )
}

export default ListNotes;