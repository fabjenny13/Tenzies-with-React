import {useState} from 'react'

import "./Dice.css"

function Dice(props) {

    return (
        <button className = "dice-button"
        style = {
            {
                backgroundColor: (props.onHold) ? '#009933' : '#2e2e2e'
            }
        }
        
        onClick = {() => {
            props.handleClick(props.index);
        }}
        >{props.number}</button>
    )
}


export default Dice;
