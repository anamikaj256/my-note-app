import React from 'react';

export default function Nav({ current, onChange }) {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={() => onChange('add')}
        className={`px-4 py-2 rounded ${
          current === 'add' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        Add Note
      </button>
      <button
        onClick={() => onChange('list')}
        className={`px-4 py-2 rounded ${
          current === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'
        }`}
      >
        View Notes
      </button>
    </div>
  );
  // Why this nav approach for simplicity: minimal state toggle without routing
}
