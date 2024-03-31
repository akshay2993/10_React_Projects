import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({id, title, content, handleDelete}) => {
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => handleDelete(id)}>
        <DeleteIcon />
      </button>
    </div>
  )
}

export default Note
