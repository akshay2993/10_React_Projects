import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import notes from './notes'

const App = () => {
  return (
    <>
      <Header />
      {notes.map((note) => <Note key={note.key} title={note.title} content={note.content} />)}
      <Footer />
    </>
  )
}

export default App
