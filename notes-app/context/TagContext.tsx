import React, { createContext, useContext, useState, useCallback } from 'react';
import { Tag } from '../types/tag';
import { saveTags, getTags } from '../utils/storage';

interface TagContextType {
  tags: Tag[];
  addTag: (tag: Omit<Tag, 'id'>) => Promise<void>;
  deleteTag: (id: string) => Promise<void>;
}

const TagContext = createContext<TagContextType | undefined>(undefined);

export function TagProvider({ children }: { children: React.ReactNode }) {
  const [tags, setTags] = useState<Tag[]>([]);

  // Initialize tags from storage
  React.useEffect(() => {
    loadTags();
  }, []);

  const loadTags = async () => {
    const storedTags = await getTags();
    if (storedTags) {
      setTags(storedTags);
    }
  };

  const addTag = useCallback(async (tagData: Omit<Tag, 'id'>) => {
    const newTag: Tag = {
      ...tagData,
      id: Date.now().toString(),
    };

    const updatedTags = [...tags, newTag];
    setTags(updatedTags);
    await saveTags(updatedTags);
  }, [tags]);

  const deleteTag = useCallback(async (id: string) => {
    const updatedTags = tags.filter(tag => tag.id !== id);
    setTags(updatedTags);
    await saveTags(updatedTags);
  }, [tags]);

  const value = {
    tags,
    addTag,
    deleteTag,
  };

  return (
    <TagContext.Provider value={value}>
      {children}
    </TagContext.Provider>
  );
}

export function useTags() {
  const context = useContext(TagContext);
  if (context === undefined) {
    throw new Error('useTags must be used within a TagProvider');
  }
  return context;
}
