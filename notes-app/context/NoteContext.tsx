import React, { createContext, useContext, useState, useCallback } from 'react';
import { Note } from '../types/note';
import { saveNotes, getNotes } from '../utils/storage';

interface NoteContextType {
  notes: Note[];
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateNote: (note: Note) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
  getNotesByTag: (tag: string) => Note[];
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export function NoteProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);

  // Initialize notes from storage
  React.useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const storedNotes = await getNotes();
    if (storedNotes) {
      setNotes(storedNotes);
    }
  };

  const addNote = useCallback(async (noteData: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newNote: Note = {
      ...noteData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    await saveNotes(updatedNotes);
  }, [notes]);

  const updateNote = useCallback(async (updatedNote: Note) => {
    const updatedNotes = notes.map(note => 
      note.id === updatedNote.id 
        ? { ...updatedNote, updatedAt: new Date() }
        : note
    );
    setNotes(updatedNotes);
    await saveNotes(updatedNotes);
  }, [notes]);

  const deleteNote = useCallback(async (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    await saveNotes(updatedNotes);
  }, [notes]);

  const getNotesByTag = useCallback((tag: string) => {
    return notes.filter(note => note.tags.includes(tag));
  }, [notes]);

  const value = {
    notes,
    addNote,
    updateNote,
    deleteNote,
    getNotesByTag,
  };

  return (
    <NoteContext.Provider value={value}>
      {children}
    </NoteContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NoteContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NoteProvider');
  }
  return context;
}
