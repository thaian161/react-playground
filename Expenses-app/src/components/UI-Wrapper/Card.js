import React from "react";

import "./Card.css";

//this Card components act like a wrapper component
const Card = (props) => {
  //Allow dynamic classes from everywhere to work with the wrapper class "card"
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
