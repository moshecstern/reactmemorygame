import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        count: 0
    };

    // handleIncrement increments this.state.count by 1
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
    };

    // The render method returns the JSX that should be rendered
    render() {
        return (
            <nav class="navbar d-block">
                <ul class="row">
                    <li class="col-4">Clicky Game</li>
                    <li class="col-4">Click an Image to Begin!</li>
                    <li class="col-4">Score: {this.state.count} </li>
                </ul>
                {/* <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div> */}
            </nav>
        );
    }
}

export default Counter;