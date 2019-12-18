import React from "react";

// By extending the React.Component class, Navbar inherits functionality from it
function Navbar(props) {

        return (
            <nav className="navbar d-block">
                <ul className="row">
                    <li className="col-md-4">Clicky Game</li>
                    <li className="col-md-4">Click an Image to Begin!</li>
                    <li className="col-md-4">Score: {props.count}||High Score: {props.highcount} </li>
                </ul>
             
            </nav>
        );
    }


export default Navbar;