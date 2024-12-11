import React from "react";

export default function Results(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>rating: {props.rating}</h3>
      {console.log(props.img)}

      <img src={props.img} alt="no image" />
      <h3>distance: {props.distance} miles</h3>
    </div>
  );
}
