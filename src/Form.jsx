
import "./Form.css"
import { useState } from "react";

function Form(props){
    const [name, setName] = useState("");


    const handleSubmit = (e) => {
        props.onSubmit(name);
    }


    return (
        <div>
            <form className = "centered"
            onSubmit={handleSubmit}>
                <p>Hey Player! What's your name?</p>
                <input 
                type="text" 
                id = "name" 
                name = "name" 
                value = {name}
                onChange = {(e) => {
                    setName(e.target.value)
                }}></input>
                <br />
                <button>Go</button>
            </form>
            
        </div>
    )
}

export default Form;