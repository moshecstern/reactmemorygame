import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import SuperheroCard from "./components/SuperheroCard";
import Counter from "./components/Counter";

import Superheros from "./superheros.json";

class App extends React.Component {
  state = {
    Superheros: Superheros
  }

  removeFriend = id => {
    // Create a new array that filters out the friend with the ID of id
    const newSuperheros = this.state.Superheros.filter(function(item) {
      if (item.id !== id) {
        return true;
      }
    });
    console.log(newSuperheros)
  
    //set the state of friends to be the new array
    this.setState({Superheros: newSuperheros})
    console.log(id);
  }

  render(){

    return (
      <div>
      <Counter/>
      <Wrapper>

<h1 className="title">Superhero List</h1>
      {this.state.Superheros.map((item, id) => 

      <SuperheroCard
        id = {item.id}
        name={item.name}
        image={item.image}
        removeFriend={this.removeFriend}
        />
      )}

      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div> */}

    </Wrapper>
    </div>
  );
}
}

export default App;
