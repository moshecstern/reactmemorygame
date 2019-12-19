import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import SuperheroCard from "./components/SuperheroCard";
import Navbar from "./components/Navbar";
import Superheros from "./superheros.json";

let counter = 0;

class App extends React.Component {
  state = {
    Score: 0,
    HighScore: 0,
    CounterState: 0,
    NewSuperheros: [],
    Superheros: Superheros
  }

  

  ClickedImage = id => {
    const { NewSuperheros } = this.state;
    // console.log(id)

    this.shuffle();
    if (NewSuperheros.includes(id)) {
      this.setState({Score: 0})
      
      //logic for couter
      // this.setState({ HighScore: this.state.Score})
      // this.setState({ Score: })
    }
    else if (!NewSuperheros.includes(id)) {
      counter = counter += 1;
      console.log(counter);
      // this.state({ CounterState: counter})
      // this.setState({ HighScore: counter})
      this.setState({ Score: counter})
      if(this.state.Score > this.state.HighScore){
        this.setState({HighScore: this.state.Score})
      }
      
      
      NewSuperheros.push(id);
      //logic for counter
    }
    // const uniqueNames = names.filter((val, id, array) => {
    //   return array.indexOf(val) == id;  
    //  });
    // const NewSuperheros = this.state.Superheros;
    // const NewSuperheros = this.state.Superheros.map(pic => {
    //   if (pic.id === id) {
    //     if (!pic.clicked) {
    //       pic.clicked = true
    //       this.updateScore(true)
    //       this.UpdateHighScore();

          // this.shuffle()
          // this.setState({
          //   Score: this.state.Score+1
          // });
          // update the top score if score is greater than top score
          // if the score is equal to 12 you win!!!
          // then reset game but do not reset top score
        // } else {
          // Now reset the game
          // pic.clicked = false

          // this.updateScore(false)
          // this.UpdateHighScore()
          // this.resetGame(true);
          // return !pic;

          // this.setState({
          //   // Score: 0,
          //   Superheros: Superheros
          // });
          // alert("You lose!");
    //     }
    //   }
    //   console.log("********")
    //   console.log(pic);
    //   console.log("********")
    //   return pic;

    // });

    // if (pic.id === id){

    // this.setState({
    //   Superheros: NewSuperheros
    // })
    // console.log("adding/ setting NewSuperheros to Superheros; line62")
    // // }else{
    //   this.setState({
    //     Superheros: Superheros
    //   })
    // }

  }
  // end of on click image

  // updatehighscore function
  // UpdateHighScore = () => {
  //   if (this.state.Score === 12) {
  //     alert("You win");
  //     // reset game function
  //     this.resetGame(false)
  //   } else if (this.state.Score > this.state.HighScore) {
  //     this.setState({
  //       HighScore: this.state.Score
  //     })
  //     // this.resetGame(false)
  //   }
  // }
  // updateScore = (boolean) => {
  //   if (boolean === true) {
  //     return this.setState({
  //       Score: this.state.Score + 1,
  //     });
  //   } else if (boolean === false) {
  //     return this.setState({
  //       Score: 0,
  //     })
  //   }
  // } // end of updatescore func

  //shuffle board function
  shuffle = () => {
    this.state.Superheros.sort(function (a, b) { return 0.5 - Math.random() });
    // this.state.Superheros.sort(() => Math.random() - 3.33)
  }
  //reset game function
  resetGame = boolean => {
    if (boolean === true) {
      // reset entire game and set score to 0 and call state superheros: superheros
      // shuffleboard
      // this.state.Superheros.forEach(pic => {
      //   pic.clicked = false;
      // });
      this.shuffle()
      alert("You lose!")
      this.setState({
        Score: 0,
        Superheros: []
      })
      return this.setState({
        Superheros: Superheros
      })
      // console.log("making Superheros: superheros; line 124")
    } else {
      // shuffle board
      // this.setState({
      //   Superheros: Superheros
      // })
      // console.log("making Superheros: superheros; line 130")

      this.shuffle()
    }
  }



  render() {

    return (
      <div>
        <Navbar count={this.state.Score} highcount={this.state.HighScore} />
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

