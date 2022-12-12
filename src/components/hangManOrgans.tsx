import style from "./hangMan.module.css"
const Head = <div key={1} className={style.head}></div>
const Body = <div key={2} className={style.manBody}></div>
const LeftHand = <div key={3} className={style.leftHand}></div>
const RightHand = <div key={4} className={style.rightHand}></div>
const LeftFoot = <div key={5} className={style.leftFoot}></div>
const RightFoot = <div key={6} className={style.rightFoot}></div>

export default [Head, Body, LeftHand, RightHand, LeftFoot, RightFoot]