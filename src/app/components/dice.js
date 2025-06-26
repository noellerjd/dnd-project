export default function Dice(props) {
  return (
    <div className="dice-box">
      <p alt={props.dice}>{props.dice}</p>
    </div>
  );
}
