import { useContext } from 'react';
import { EmojiContext } from '../contexts/EmojiContext';

function MoodChanger() {
  const { mood, setMood } = useContext(EmojiContext);

  return (
    <>
      <button onClick={() => setMood(mood === 'happy' ? 'sad' : 'happy')}>
        Toggle mood
      </button>
    </>
  );
}

export default MoodChanger;