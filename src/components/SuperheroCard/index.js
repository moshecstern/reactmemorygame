import React from "react";
import "./style.css";


// removeFriend = (id) => {
//   this.setState({friends: this.state.friends -1})
// }

// state = {
//   count: 0
// };
// handleIncrement = () => {

//   // We always use the setState method to update a component's state
//   this.setState({ count: this.state.count + 1 });
// };

function SuperheroCard(props) {
  return (

      <img onClick={() =>props.removeFriend(props.id)} src={props.image} alt={props.name} class="img-thumbnail col-3"/>

    // <div className="card col-3">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
      /* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div> */
      // <span className="remove" onClick={() =>props.removeFriend(props.id)}>𝘅</span>
    // </div>
  );
}

export default SuperheroCard;
