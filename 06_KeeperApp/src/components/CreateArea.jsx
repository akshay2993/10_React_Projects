import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Fab, Zoom } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateArea = ({ onAdd }) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
        key: uuidv4(),
    })
    const [isExpanded, setIsExpanded] = useState(false)

    function submitNote(e) {
        e.preventDefault()
        if(note.title && note.content){
            onAdd(note)
        }
        setNote({
            key: "",
            title: "",
            content: "",
        })
        setIsExpanded(false)
    }

    function expand() {
        setIsExpanded(true)
    }

    return (
        <div>
            <form className='create-note'>
                {isExpanded && <input name="title" placeholder='Title' value={note.title} onChange={(e) => setNote((prev) => {
                    return { ...prev, title: e.target.value }
                })}
                />}
                <textarea onClick={expand} rows={isExpanded ? 3 : 1} name='content' placeholder='Take a note....' value={note.content} onChange={(e) =>
                    setNote((prev) => {
                        return { ...prev, content: e.target.value }
                    })}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea
