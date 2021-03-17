const url = 'http://localhost:8000/api/v1/notes/'

export const fetchNotes = async() => {
    console.log('Requesting Data')
    return fetch(url,{})
    .then(res => res.json())
    .then(data =>{
        console.log('data : ',data)
        return data
    });
}

// export const fetchNote = (id) => {
//     return fetch(url)
    
// }

export const addNote = (note) => {
    fetch(url,{
        method:'POST',
        headers:{
            Accept:'application/json','Content-Type':'application/json'
        },
        body:JSON.stringify(note)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}

export const updateNote = (note) => {
   console.log("Updating Note with id : ",note.id)
}