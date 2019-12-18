import React from "react";
import "./style.css";



function SuperheroCard(props) {
  return (
    <div className="col-md-3">
      <img onClick={() =>props.ClickedImage(props.id)} src={props.image} alt={props.name} className="img-thumbnail hero-img"/>
    </div>

  );
}

export default SuperheroCard;
