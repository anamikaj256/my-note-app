import React, { useEffect, useState } from 'react';
import { loadNotes, deleteNote } from '../utils/storage';

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = loadNotes();
    setNotes(storedNotes);
  }, []);

  // Why useEffect to sync storage → state: to initialize notes from persistent storage on mount

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  if (!notes.length) {
    return <p className="text-center text-gray-500">No notes yet.</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note.id} className="p-4 bg-gray-100 rounded shadow relative">
          <h3 className="text-lg font-semibold text-blue-800">{note.title}</h3>
          <p className="text-gray-700 mt-1">{note.content.slice(0, 120)}...</p>
          <button
            onClick={() => handleDelete(note.id)}
            className="absolute top-2 right-2 text-sm text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
