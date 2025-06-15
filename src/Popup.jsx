import "./Popup.css"

function Popup(props) {
  return (
    <div className="overlayStyle">
      <div className= "popupStyle">
        <h2>Hi {props.name}!</h2>
        <ul>
        <li>Here's how you play: </li>
        <li>Click on roll to generate new numbers.</li>
        <li>Click on a number tile to highlight it. This will HOLD the number.</li>
        <li>To win, all number tiles must be highlighted and hold the same number! </li>
        </ul>
        <button onClick = {props.onClick}>Let's Play</button>
      </div>
    </div>
  );
}


export default Popup;
