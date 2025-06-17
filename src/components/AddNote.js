import React, { useState } from 'react';
import { saveNotes, loadNotes } from '../utils/storage';

export default function AddNote({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const existingNotes = loadNotes();
      const newNote = { title, content, id: Date.now() };
      const updatedNotes = [...existingNotes, newNote];
      saveNotes(updatedNotes);
      onAdd(newNote);
      setTitle('');
      setContent('');
    } catch {
      setError('Failed to save note.');
    } finally {
      setSaving(false);
    }
  };

  // Why I chose useState + this submit handler: For local state tracking and controlled form submission
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-red-600 bg-red-100 p-2 rounded">
          {error}
          {/* // Why display error banner: show feedback on storage failure */}
        </p>
      )}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded p-2"
        required
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 h-32"
        required
      />

      <button
        type="submit"
        disabled={saving}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {saving ? 'Saving...' : 'Add Note'}
      </button>
      {/* // Why show spinner here: provides user feedback during async storage call */}
    </form>
  );
}
