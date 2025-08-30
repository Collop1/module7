import { EmojiProvider } from '../contexts/EmojiContext';
import MoodChanger from '../components/MoodChanger';
import BitcoinRates from '../components/BitcoinRates'

export default function BitcoinRatesPage() {
  return (
    <div className="App">
      <EmojiProvider>
        <BitcoinRates />
        <MoodChanger />
      </EmojiProvider>
    </div>
  );
}