import AsyncStorage from '@react-native-async-storage/async-storage';
import { Note } from '../types/note';
import { Tag } from '../types/tag';

const NOTES_KEY = '@notes';
const TAGS_KEY = '@tags';

export const saveNotes = async (notes: Note[]) => {
  try {
    const jsonValue = JSON.stringify(notes);
    await AsyncStorage.setItem(NOTES_KEY, jsonValue);
  } catch (e) {
    // saving error
    console.error("Error saving notes:", e);
  }
};

export const getNotes = async (): Promise<Note[] | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(NOTES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.error("Error retrieving notes:", e);
    return null;
  }
};

export const saveTags = async (tags: Tag[]) => {
  try {
    const jsonValue = JSON.stringify(tags);
    await AsyncStorage.setItem(TAGS_KEY, jsonValue);
  } catch (e) {
    // saving error
    console.error("Error saving tags:", e);
  }
};

export const getTags = async (): Promise<Tag[] | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(TAGS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.error("Error retrieving tags:", e);
    return null;
  }
};
