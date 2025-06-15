import {useState, useEffect} from "react"
import Confetti from 'react-confetti'

import Dice from "./Dice"
import Form from "./Form"
import Popup from "./Popup"
import "./App.css"




function App() {

  const [diceNums, setDiceNums] = useState(new Array(10).fill(0))
  const [diceHeld, setDiceHeld] = useState(new Array(10).fill(false))
  const [gameWon, setGameWon] = useState(false)
  const [isReset, setIsReset] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [name, setName] = useState("Player")
  const [showPopup, setShowPopup] = useState(false)


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

    setGameWon(isWon);
    return isWon;
    
  }

  function resetGame() {
    setGameWon(false)
    setIsReset(true)
    setDiceHeld(new Array(10).fill(false))
  }


  function rollDice() {
    let newNums = diceNums.map((ele, ind) => ele = diceHeld[ind] ? ele : Math.floor(Math.random() * (9-1) + 1))
    setDiceNums(newNums)
  }


  function handleDiceClick(index) {
    const newArr = [...diceHeld]
    newArr[index] = !(diceHeld[index])
    setDiceHeld(newArr)
  }


  function startGame() {
    setGameStarted(true)
    setShowPopup(false)
  }


  function showPopUp() {
    setShowPopup(true)
  }




  useEffect(rollDice, [])

  useEffect(() => {checkWin() ? setShowConfetti(true): {}}, [diceHeld])

  useEffect(() => {

    if(showConfetti){
      const timer = setTimeout(() => setShowConfetti(false), 6000);
      return () => clearTimeout(timer);
    }
    }, [showConfetti])


  useEffect(() => {
    if (!gameWon && isReset) {
      rollDice()
      setIsReset(false)
    }
    }, [diceHeld, isReset])

  
  
  return (

    <div>
      
      {
        (!gameStarted && !showPopup) &&(
          <div className = "container">
        <h1>TENZIES</h1>
        <Form onSubmit = {showPopUp}></Form>
        </div>
      )
      }

     
      {
      showPopup && (
        <div className = "container">
            <Popup onClick = {startGame} name = {name}></Popup>
        </div>
      )  
      }
      

    { gameStarted && 
      ( <div className = "container">
      {showConfetti && <Confetti />}
      <h1>TENZIES</h1>
      
      <br />
      <div>
      <div>
        {arr.map((ele, ind) => <Dice 
        key={ind}
        number = {diceNums[ind]} 
        index = {ind} 
        handleClick = {handleDiceClick} 
        onHold = {diceHeld[ind]}/>
        )}
      </div>

      <div>
        {arr.map((ele, ind) => <Dice 
        key={ind + 5}
        number = {diceNums[ind + 5]} 
        index = {ind + 5} 
        handleClick = {handleDiceClick} 
        onHold = {diceHeld[ind + 5]}/>
        )}
      </div>
      </div>

      <br />
      <br />

      {
        gameWon ? <h2>YOU WIN!</h2> :
      <button className = "roll-button"
      onClick = {rollDice}
      >Roll</button>
      }

      <br />
      <button className = "reset-button"
      onClick = {resetGame}>Reset Game</button>
    </div> )
    }

    </div>
  )
}

export default App
