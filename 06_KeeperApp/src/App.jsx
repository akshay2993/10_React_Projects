import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import notes from './notes'
import CreateArea from './components/CreateArea'
import { useState } from 'react'

const App = () => {
  const [noteList, setNoteList] = useState(notes)
  
  function addItem(note) {
    const newNotes = [...noteList, note]
    setNoteList(newNotes)
  }

  function deleteItem(id){
    const filteredNotes = noteList.filter((item) => item.key !== id)
    setNoteList(filteredNotes)
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {noteList.map((note) => <Note key={note.key} id={note.key} title={note.title} content={note.content} handleDelete={deleteItem}/>)}
      <Footer />
    </div>
  )
}

export default App
