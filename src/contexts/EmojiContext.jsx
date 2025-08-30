import { createContext, useState } from 'react';

export const EmojiContext = createContext({
  mood: 'happy',
  setMood: () => { },
});

export function EmojiProvider({ children }) {
  const [mood, setMood] = useState('happy');
  // The value that will be provided to users
  const value = {
    mood,
    setMood,
  };

  return (
    <EmojiContext.Provider value={value}>
      {children}
    </EmojiContext.Provider>
  );
}