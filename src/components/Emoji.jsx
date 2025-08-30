import { useContext } from 'react';
import { EmojiContext } from '../contexts/EmojiContext';

function Emoji() {
  const { mood } = useContext(EmojiContext);

  return (
    <span role="img" aria-label={mood}>
      {mood === 'happy' ? '😄' : '😢'}
    </span>
  );
}

export default Emoji;