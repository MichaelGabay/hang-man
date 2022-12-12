import React, { useEffect } from 'react'
import style from "./keyboard.module.css"
import hebreweKeyboard from "../hebrewKeyboard.json"

interface Props {
  guessedLetters: string[],
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>,
  word: string[],
  messLetters: string[],
  setMessLetters: React.Dispatch<React.SetStateAction<string[]>>
}


const Keyboard: React.FC<Props> = ({ guessedLetters, setGuessedLetters, word, messLetters, setMessLetters }) => {
  const updateLetters = (letter: string) => {
    if (messLetters.length < 6) {
      if (word.includes(letter)) {
        if (!guessedLetters.includes(letter)) setGuessedLetters([...guessedLetters, letter])
      }
      else {
        if (!messLetters.includes(letter)) setMessLetters([...messLetters, letter])
      }
    }
  }
  return (
    <div className={style.keyboard}>
      {
        hebreweKeyboard.map((line, i) => {
          return (
            <div key={i} className={style.row}>
              {line.map((letter, index) => {
                return (
                  <button key={index} onClick={() => updateLetters(letter)} className={`${style.letterBtn} ${messLetters.includes(letter) ? style.inactive : "not"} ${guessedLetters.includes(letter) ? style.active : "not"}`}>{letter}</button>
                )
              })}
            </div>
          )
        })
      }
    </div>
  )
}

export default Keyboard