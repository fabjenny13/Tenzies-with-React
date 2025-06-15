
function Form(props){
    return (
        <div>
            <form 
            onSubmit={props.onSubmit}>
                <p>Hey Player! What's your name?</p>
                <input type="text"></input>
            </form>
        </div>
    )
}

export default Form;