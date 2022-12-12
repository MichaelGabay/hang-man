import React, { useState } from 'react'
import style from "./wordToguess.module.css"
interface Props {
    word: string,
    guessedLetters: string[],
}

const WordToGuess: React.FC<Props> = ({ word, guessedLetters }) => {

    return (
        <div className={style.text}>
            {
                word.split("").map((letter, i) =>
                    <div key={i} className={`${style.letter} ${guessedLetters.includes(letter) ? "not" : style.hidden} ${letter == " " ? style.space : "not"}`}>{letter}</div>
                )
            }
        </div>
    )
}

export default WordToGuess