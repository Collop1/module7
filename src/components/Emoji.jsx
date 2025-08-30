import { useContext } from 'react';
import { EmojiContext } from '../contexts/EmojiContext';

function Emoji() {
  const { mood } = useContext(EmojiContext);

  return (
    <div>
      <span role="img" aria-label={mood}>
        {mood === 'happy' ? '😄' : '😢'}
      </span>
    </div>
  );
}

export default Emoji;