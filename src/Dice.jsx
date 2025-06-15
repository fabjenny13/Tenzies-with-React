import {useState} from 'react'



function Dice(props) {

    return (
        <button
        style = {
            {
                backgroundColor: (props.onHold) ? '#11ef39' : '#e8e1cf'
            }
        }
        onClick = {() => {
            props.handleClick(props.index);
        }}
        >{props.number}</button>
    )
}


export default Dice;
