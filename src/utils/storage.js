const STORAGE_KEY = 'notes_app_notes';

export function saveNotes(notes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Failed to save notes:', error);
    throw error;
  }
}

export function loadNotes() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load notes:', error);
    return [];
  }
}




export function deleteNote(id) {
  const existing = loadNotes();
  const filtered = existing.filter(note => note.id !== id);
  saveNotes(filtered);
}
