import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import SuperheroCard from "./components/SuperheroCard";
import Navbar from "./components/Navbar";
import Superheros from "./superheros.json";
// import Counter from './components/Counter/Counter';

class App extends React.Component {
  state = {
    Score: 0,
    HighScore: 0,
    message: "Click a Superhero to get started!",
    NewSuperheros: [],
    Superheros: Superheros
  }


  ClickedImage = id => {
    const { NewSuperheros } = this.state;
    if (NewSuperheros.includes(id)) {
      this.shuffle();
      this.resetGame(false);
    }
    else if (!NewSuperheros.includes(id)) {
      this.shuffle();
      this.setState({ Score: this.state.Score + 1 }, function () {
        console.log("line 51: the score now is " + this.state.Score)
        if (this.state.Score > this.state.HighScore) {
          this.setState({ HighScore: this.state.Score }, function () {
            if (this.state.Score === 12) {
              this.resetGame(true);
              // window.location.reload();
              console.log("reset game damnit")
            }
          })
        }
      })
      NewSuperheros.push(id);
    }
  };


  shuffle = () => {
    this.state.Superheros.sort(function () { return 0.5 - Math.random() });
  }
  //reset game function
  resetGame = (booleam) => {
    if (!booleam){
    this.setState({
      Score: 0,
      NewSuperheros: [],
      message: "OOO So close, try again!"
    })
  }else if (booleam) {
    this.setState({
      Score: 0,
      NewSuperheros: [],
      HighScore: 0,
      message: "YAY YOU WIN!!!!!!"
    })
  }
  }


  render() {

    return (
      <div>
        <Navbar count={this.state.Score} highcount={this.state.HighScore} message={this.state.message}/>
        <Wrapper>


          {this.state.Superheros.map((item) => (
            // {this.state.NewSuperheros.map((item, id) =>

            <SuperheroCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              ClickedImage={() => this.ClickedImage(item.id)}
            />
          ))}

        </Wrapper>
      </div>
    );
  }
}

export default App;

