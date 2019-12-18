import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import SuperheroCard from "./components/SuperheroCard";
import Navbar from "./components/Navbar";
import Superheros from "./superheros.json";



class App extends React.Component {
  state = {
    Score: 0,
    HighScore: 0,
    // Clicked: 0,
    // NewSuperheros: [],
    Superheros: Superheros
  }

  ClickedImage = (id, Clicked, fakeid) => {
        // const NewSuperheros = this.state.Superheros;
    const NewSuperheros = this.state.Superheros.map(pic => {
      if (pic.id === id) {
        if(!pic.clicked) {
          pic.clicked = true

          this.setState({
            Score: this.state.Score+1
          });

          // update the top score if score is greater than top score

          // if the score is equal to 12 you win!!!
          // then reset game but do not reset top score
        } else {
          alert("You lose!");
          // Now reset the game
          this.setState({
            Score: 0,
            Superheros: Superheros
          });
        }
      }

      return pic;
    });

    this.setState({
      Superheros: NewSuperheros
    })
    
        // console.log(ClickedSupers);
        // // this.setState({
        // //   Superheros: NewSuperheros
        // // })
        // console.log("id")
        // console.log(id);
        // console.log("NewSuperheros")
        // console.log(NewSuperheros);
        // 
        // console.log(item.id);
        // if clicked allready then game over, save high score and restart game
        // else this image gets Clicked: 1(true) and shuffle board/ randomize the new array of superheros 
        // if (this.state.NewSuperheros.includes(ClickedSupers)) {
        //   // if (this.state.NewSuperheros.includes(name)){
    
        //   // }
        //   console.log("if this.state.Clicked is 0")
        //   this.setState({
        //     // Clicked: true,
        //     // })
        //     // //set the state of friends to be the new array
        //     // this.setState({
    
        //     // arr: this.state.arr.concat('new value')
    
        //     // NewSuperheros: this.Superheros,
        //     // ClickedImage: true,
        //     Score: this.state.Score + 1
        //   })
        //   console.log("id")
        //   console.log(id);
        //   console.log("this.state.score")
        //   console.log(this.state.Score);
        //   console.log("this.state.Clicked")
        //   console.log(this.state.Clicked)
        //   // console.log("Clicked")
        //   // console.log(Clicked);
        //   // shuffleboard
        //   // UpdateHighScore(this.state.Score);
        //   // updatehighscore function
        //   //  UpdateHighScore = (Score) => {
        //   //  if(this.state.Score > this.state.HighScore){
        //   //  return this.setState({
        //   //    HighScore: this.state.Score
        //   //  })
        //   // this.state.HighScore = this.state.Score;
        //   // this.state.Score= 0
    
        //   //  }
        //   //     }
        //   //  } else  {
        //   console.log("youv clicked this allready, try again!")
        // }
    
    
      }
    

  render() {

    return (
      <div>
        <Navbar count={this.state.Score} highcount={this.state.HighScore} />
        <Wrapper>


        {this.state.Superheros.map((item) =>
          // {this.state.NewSuperheros.map((item, id) =>

            <SuperheroCard
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              ClickedImage={this.ClickedImage}
            />
          )}

        </Wrapper>
      </div>
    );
  }
}

export default App;

// ORIGINIAL IS ABOVE



// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Wrapper from "./components/Wrapper";
// import SuperheroCard from "./components/SuperheroCard";
// import Navbar from "./components/Navbar";
// import Superheros from "./superheros.json";


// class App extends React.Component {
//   state = {
//     Score: 0,
//     HighScore: 0,
//     maxScore: 12,
//     // isGuessCorrect: true,
//     // Clicked: 0,
//     NewSuperheros: [],
//     Superheros: Superheros
//   }

//   // can i have seprate array with the same items as superhero array and remove 
//   // game start =s by clicking img
//   ClickedImage = (id, Clicked, fakeid) => {
//     const NewSuperheros = this.state.Superheros;
//     const ClickedSupers = NewSuperheros.map(pic => {
//       if (pic.id === id) {
//         pic.clicked = true
//       }

//       return pic;
//     });

//     console.log(ClickedSupers);
//     // this.setState({
//     //   Superheros: NewSuperheros
//     // })
//     console.log("id")
//     console.log(id);
//     console.log("NewSuperheros")
//     console.log(NewSuperheros);
//     console.log("Clicked this.state");
//     console.log(this.state.Clicked);
//     console.log("superhero.clicked");
//     console.log(Clicked)
//     // console.log(item.id);
//     // if clicked allready then game over, save high score and restart game
//     // else this image gets Clicked: 1(true) and shuffle board/ randomize the new array of superheros 
//     if (this.state.NewSuperheros.includes(ClickedSupers)) {
//       // if (this.state.NewSuperheros.includes(name)){

//       // }
//       console.log("if this.state.Clicked is 0")
//       this.setState({
//         Clicked: true,
//         // })
//         // //set the state of friends to be the new array
//         // this.setState({

//         // arr: this.state.arr.concat('new value')

//         // NewSuperheros: this.Superheros,
//         // ClickedImage: true,
//         Score: this.state.Score + 1
//       })
//       console.log("id")
//       console.log(id);
//       console.log("this.state.score")
//       console.log(this.state.Score);
//       console.log("this.state.Clicked")
//       console.log(this.state.Clicked)
//       // console.log("Clicked")
//       // console.log(Clicked);
//       // shuffleboard
//       // UpdateHighScore(this.state.Score);
//       // updatehighscore function
//       //  UpdateHighScore = (Score) => {
//       //  if(this.state.Score > this.state.HighScore){
//       //  return this.setState({
//       //    HighScore: this.state.Score
//       //  })
//       // this.state.HighScore = this.state.Score;
//       // this.state.Score= 0

//       //  }
//       //     }
//       //  } else  {
//       console.log("youv clicked this allready, try again!")
//     }


//   }

//   render() {

//     return (
//       <div>
//         <Navbar count={this.state.Score} highcount={this.state.HighScore} />
//         <Wrapper>


//           {/* {Superheros.map((item, id, clicked) => */}
//           {this.state.NewSuperheros.map((item, id, clicked) =>

//             <SuperheroCard
//               key={id}
//               id={item.id}
//               name={item.name}
//               image={item.image}
//               Clicked={clicked}
//               ClickedImage={this.ClickedImage}
//             />
//           )}

//         </Wrapper>
//       </div>
//     );
//   }
// }

// export default App;
