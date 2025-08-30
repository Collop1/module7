import { EmojiProvider } from './contexts/EmojiContext';
import MoodChanger from './components/MoodChanger';
import BitcoinRates from './components/BitcoinRates'
import './App.css'

function App() {
  return (
    <div className="App">
      <EmojiProvider>
        <BitcoinRates />
        <MoodChanger />
      </EmojiProvider>
    </div>
  );
}

export default App;
