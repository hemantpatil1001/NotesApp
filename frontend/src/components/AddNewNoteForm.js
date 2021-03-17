import React,{useState, useEffect} from 'react'
import {Form, FormGroup, Button, Input, Label} from 'reactstrap'

function AddNewNoteForm({saveNote}){
    

    const [title , setTitle] = useState('')
    const [content, setContent] = useState('')

    function handleFormSubmit(e){

        console.log("• Inside handleFormSubmit")
        e.preventDefault();
       
       
        let note = {
            title,
            content
        }
        console.log("inside •••••••••••••ßßßß handleFormSubmit : ", note)
        saveNote(note)
        //clear the state
        setTitle('')
        setContent('')
    }

    // useEffect(() => {
    //     console.log('Title',title)
    //     console.log('Content', content)
    // })

    return (
        <React.Fragment>
            <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input onChange = {(e)=>setTitle(e.target.value)} type = "text" name = "title" value={title}/>
                </FormGroup>
                <FormGroup>
                    <Label>Content</Label>
                    <Input onChange = {(e)=>setContent(e.target.value)} type = "textarea" name = "content" value={content}/>
                </FormGroup>
                <Button color="success">Save</Button>
            </Form>
        </React.Fragment>
    )
}

export default AddNewNoteForm