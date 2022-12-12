import { useState } from 'react'
import style from './App.module.css'
import HangMan from './components/HangMan'
import Keyboard from './components/Keyboard'
import WordToGuess from './components/WordToGuess'
import If from './helpComponents/If'
import words from "./words.json"

const App: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useState<string>(words[Math.floor(Math.random() * words.length)])
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [messLetters, setMessLetters] = useState<string[]>([])
  const playAgain = () => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)])
    setGuessedLetters([])
    setMessLetters([])
  }
  return (
    <div className={style.container}>
      <HangMan numOfWrongGuesses={messLetters.length} />
      <WordToGuess word={wordToGuess} guessedLetters={guessedLetters} />
      <Keyboard setMessLetters={setMessLetters} messLetters={messLetters} word={wordToGuess.split("")} setGuessedLetters={setGuessedLetters} guessedLetters={guessedLetters} />
      <If conddition={messLetters.length >= 6}>
        <button onClick={playAgain} className={style.againBtn}>שחק שוב</button>
      </If>
    </div>
  )
}

export default App
