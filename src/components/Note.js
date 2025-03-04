import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import NoteView from './NoteView';
import NoteForm from './NoteForm';

const Note = ({ note, handleDeleteNote, handleEditNote }) => {
  const [editing, setEditing] = useState(false);

  const editHandler = (data) => {
    handleEditNote(data);
    setEditing(false);
  };

  const footer = editing ? (
    ''
  ) : (
    <div className='flex items-center justify-between p-4 note-footer'>
      <small className='text-gray-900'>{note.date}</small>
      <div className='flex space-x-2'>
        <MdEdit
          className='edit-icon text-gray-900
              hover:text-gray-600 cursor-pointer'
          size='1.3em'
          onClick={() => setEditing(true)}
        />
        <MdDeleteForever
          onClick={() => handleDeleteNote(note.id)}
          className='delete-icon text-gray-900 hover:text-gray-600 cursor-pointer'
          size='1.3em'
        />
      </div>
    </div>
  );

  return (
    <div className='Note flex flex-col justify-between bg-gray-50 border border-gray-700 rounded-lg shadow-lg'>
      {editing ? (
        <NoteForm handleAddNote={editHandler} defaultState={note} />
      ) : (
        <NoteView note={note} />
      )}
      {footer}
    </div>
  );
};
export default Note;
