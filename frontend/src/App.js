
import './App.css';
import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Button} from 'reactstrap'
import ListNotes from './components/ListNotes'
import AddNewNoteForm from './components/AddNewNoteForm'

import { fetchNotes, fetchNote, addNote, updateNote} from './api';

// var notes_data_temp = [
//   {
//     'id':1,
//     'title':'test_note_1',
//     'content':'Testing Notes Application Note 1'
//   },
//   {
//     'id':2,
//     'title':'test_note_2',
//     'content':'Testing Notes Application Note 2'
//   },
//   {
//     'id':3,
//     'title':'test_note_3',
//     'content':'Testing Notes Application Note 3'
//   }
// ]



function App() {

  
  const [notes,setNotes] = useState([]);
  const [current_note_id, setCurrentNoteID] = useState(0);
  const [is_creating, setIsCreating] = useState(true);
  const [is_loading, setIsLoading] = useState(true);


 

  useEffect(()=>{
    if(is_loading){
      getData()
    }
   
  })
  
  async function getData(){
    
      let data = await fetchNotes();
      console.log('___________',data)
      setNotes(data);
      setIsLoading(false);
    
  }

  function handleItemClick(id){
    setCurrentNoteID(id);
    setIsCreating(false);
    setCurrentNoteID(id);
    console.log("id :",id);
  }

  function handleCreateNewNote(){
    setIsCreating(true);
  }

  async function saveNote(data){
    console.log("ADDING NOTE XXXXXXXXXXXXXXX, inside handleSaveNote",data)
    await addNote(data)
    setIsLoading(true)
  }



  return (
   <div>
     <Container>
       <Row>
         <Col xs="10">
           <h2>Realtime Notes</h2>
         </Col>
         <Col xs ="2">
           <Button color="primary" onClick={()=>handleCreateNewNote()}>Create New Note</Button>
         </Col>
       </Row>
       <Row>
         <Col xs = "4">
           <ListNotes notes={notes} handleItemClick={(id)=>handleItemClick(id)}></ListNotes>
         </Col>
         <Col xs = "8">
           {
            is_creating ? <AddNewNoteForm saveNote = {(data) => saveNote(data)}></AddNewNoteForm> : <p>Editing note with id {current_note_id}</p>
           }
         </Col>
       </Row>
     </Container>
   </div>
  );
}

export default App;
