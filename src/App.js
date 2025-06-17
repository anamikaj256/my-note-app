import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import Nav from './components/Nav';

export default function App() {
  const [view, setView] = useState('add');
  const [newNoteTrigger, setNewNoteTrigger] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Nav current={view} onChange={setView} />
        {view === 'add' && <AddNote onAdd={() => setNewNoteTrigger(!newNoteTrigger)} />}
        {view === 'list' && <NotesList key={newNoteTrigger} />}
      </div>
    </div>
  );
}
