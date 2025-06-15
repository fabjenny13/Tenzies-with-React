import "./Popup.css"

function Popup(props) {
  return (
    <div className="overlayStyle">
      <div className= "popupStyle">
        <h2>Hi {props.name}!</h2>
        <p>Here's how you play: </p>
        <ul>
        <li>Click on roll to generate new numbers.</li>
        <li>Click on a number tile to highlight it. This will HOLD the number.</li>
        <li>To win, all number tiles must be highlighted and hold the same number! </li>
        </ul>
        <br/>
        <button className="button" onClick = {props.onClick}>Let's Play</button>
      </div>
    </div>
  );
}


export default Popup;
