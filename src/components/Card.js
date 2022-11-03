import "./Card.css";

//this Card components act like a wrapper component
function Card(props) {
  return (
    <div className="card">{props.children}</div>
  )
}

export default Card;