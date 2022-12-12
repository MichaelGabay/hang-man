import React from 'react'
import style from "./hangMan.module.css"
import Organs from "./hangManOrgans"
const HangMan: React.FC<{ numOfWrongGuesses: number }> = ({ numOfWrongGuesses }) => {
  return (
    <div className={style.wrapHangMan}>
      <div className={style.topLine}></div>
      <div className={style.rightLine}></div>
      <div className={style.leftLine}></div>
      <div className={style.buttomLine}></div>
      {Organs.slice(0, numOfWrongGuesses)}
    </div>
  )
}

export default HangMan