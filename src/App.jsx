import {useState, useEffect} from "react"
import Confetti from 'react-confetti'

import Dice from "./Dice"





function App() {

  const [diceNums, setDiceNums] = useState(new Array(10).fill(0))
  const [diceHeld, setDiceHeld] = useState(new Array(10).fill(false))
  const [gameWon, setGameWon] = useState(false)
  const [isReset, setIsReset] = useState(false)


  const arr = new Array(5).fill(0);

  function checkWin() {
    let allHeld = true;
    let isWon = false;

    diceHeld.map(ele => 
      (ele && allHeld ? allHeld = true : allHeld = false)
    )


    if(allHeld) {
      isWon = true;
      let lastNum = diceNums[0];
      diceNums.map(ele => (ele == lastNum && isWon ? isWon = true : isWon = false))
    }

    return isWon;
  }

  function resetGame() {
    setGameWon(false)
    setIsReset(true)
    setDiceHeld(new Array(10).fill(false))
  }

  useEffect(() => {
    if (!gameWon && isReset) {
      rollDice()
      setIsReset(false)
    }
  }, [diceHeld, isReset])

  function rollDice() {
    let newNums = diceNums.map((ele, ind) => ele = diceHeld[ind] ? ele : Math.floor(Math.random() * (9-1) + 1))
    setDiceNums(newNums)
  }


  function handleDiceClick(index) {
    const newArr = [...diceHeld]
    newArr[index] = !(diceHeld[index])
    setDiceHeld(newArr)
  }

  useEffect(rollDice, [])

  useEffect(() => {checkWin() ? setGameWon(true) : setGameWon(false)}, [diceHeld])

  useEffect(() => {
    if(gameWon){
      const timer = setTimeout(() => setGameWon(false), 6000);
      return () => clearTimeout(timer);
    }
    }, [gameWon])

  
  
  return (
    <div>
      {gameWon && <Confetti/>}
      <h1>TENZIES</h1>
      <div>
        {arr.map((ele, ind) => <Dice 
        number = {diceNums[ind]} 
        index = {ind} 
        handleClick = {handleDiceClick} 
        onHold = {diceHeld[ind]}/>
        )}
      </div>

      <div>
        {arr.map((ele, ind) => <Dice 
        number = {diceNums[ind + 5]} 
        index = {ind + 5} 
        handleClick = {handleDiceClick} 
        onHold = {diceHeld[ind + 5]}/>
        )}
      </div>

      <br />
      <button
      onClick = {rollDice}
      >Roll</button>

      <button onClick = {resetGame}>Reset Game</button>
    </div>
  )
}

export default App
