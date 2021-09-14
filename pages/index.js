import styles from '../styles/Home.module.css'
import Com from './com'
import Components from './components'
import Result from './result'
import { useState } from 'react'
import Refresh from './refresh'
import Message from './message'
import { useEffect } from 'react'

export default function Home() {

  let [result, setResult] = useState("VS")
  let [pChoices, setPChoices] = useState("");
  let [comChoices, setComChoices] = useState("");

  let [point, setPoint] = useState(0);
  let [msg, setMsg] = useState("");
  let [punch, setPunch] = useState(false);

  const pChoice = (e) => {
    const pResult = e.target.attributes.getNamedItem('value').value;
    setPChoices(pResult);
    const cResult = randomCom();
    setComChoices(cResult);
    const res = gameResult(cResult, pResult);

    console.log("Player: " + pResult);
    console.log("COM: " + cResult);
    console.log("Result: " + res);
    setResult(res);

    if (res === "PLAYER") {
      let temPoint = point;
      temPoint+= 1;
      setPoint(temPoint);
    } else if (res === "COM") {
      let temPoint = point;
      temPoint-= 1;
      setPoint(temPoint);
    }

  }

  

    useEffect(() => {

    if (point < 1) {
        setMsg("");
    } else if (point === 1) {
      setMsg("Cieee.. Menang");
    } else if (point === 2) {
      setMsg("Tambahin terus pointnya kalau mau tahu kelanjutannya");
    } else if (point === 3) {
      setMsg("Isaa, hmm...");
    } else if (point === 4) {
      setMsg("Aku pengen tahu sebenernya");
    } else if (point === 5) {
      setMsg("Kamu ga kangen ma aku?");
      setTimeout(() => {
        setPunch(true);
      }, 2000)
    }

    }, [point])

      


  const randomCom = () => {
    const com = Math.floor(Math.random() * (3) + 1);
    if (com === 1) {
        return 'rock';
    } else if (com === 2) {
        return 'papper';
    } else {
        return 'scissors';
    }
}

const gameResult = (comResult, playerResult) => {
    if (comResult === playerResult) {
        return 'DRAW';
    } else if (comResult === 'rock') {
        return (playerResult === 'papper') ? 'PLAYER' : 'COM';
    } else if (comResult === 'papper') {
        return (playerResult === 'scissors') ? 'PLAYER' : 'COM';
    } else if (comResult === 'scissors') {
        return (playerResult === 'rock') ? 'PLAYER' : 'COM';
    }
}
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <h1>Hello World!</h1> 
          <h1>Score: {point}</h1>
        </div>
        <Message msg={msg} />

         {point < 5 &&  <div className={styles.home}>
            <Components pChoice={pChoice} pChoices={pChoices} />
            <Result result={result} />
            <Com comChoices={comChoices} />
          </div>
}
      {punch === true && <img src="love.png" width="350rem" />} 
          <Refresh />
          
    </div>
    
  )
}
