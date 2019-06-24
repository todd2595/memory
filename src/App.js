import React, { Component } from "react";
import { Col, Row, Container } from "./component/Grid";
import './App.css';
import PicDiv from "./component/PicDiv/PicDiv";
import Wrapper from "./component/Wrapper";
import Header from "./component/Header";
import dogs from "./component/dogs.json"
import Button from "./component/Button/button"
import './App.css';

let chosen = [];
let highscore;
let endGame = () => {
  chosen = []
}

let count = 60;

class App extends Component {

 
  state = {
    score: 0,
    start:0,
    time: 0,
    value: [],
    dogs
  }

  componentDidMount() {
    this.startTimer()
  }; 

  startTimer() {
    this.setState({
      time: this.state.time,
      start: this.state.time + Date.now() 
    })
    this.timer = setInterval(() => this.setState({
      time: this.state.time+1
    }), 1000);
    
  }
  resetTimer() {
    this.setState({time: 0, isOn: false})
  }

  shuffle = (array) => {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  nextPic = (id) => {
    
      // console.log(id);
      console.log(chosen);
     if (chosen.includes(id)) {
       console.log(`you got ${this.state.score} points in ${this.state.time} seconds`)
      chosen = [];
      this.setState({
        score: 0,
        
      })}
      else if (chosen.length === 8){
        console.log("2/2")
        chosen = [];
        chosen.push(id);
        this.shuffle(dogs);
        this.setState({
          score: this.state.score + 1
        }) 
      }
      else {
        chosen.push(id);
        this.shuffle(dogs);
        this.setState({
          score: this.state.score + 1
        }) 
        console.log(chosen.length)
      };
    };
      handleInputChange = event => {
        console.log(this.state.value)
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
          [name]: value
         })
      };
render() {
  return(
    <Wrapper>
      <Header 
      score= {this.state.score}
      time = {this.state.time}/>
      <Container fluid>
        <Row>
        {this.state.dogs.map(dog => {
          return (
          <Col size ="md-3">
            <Container>
            <Button
             nextPic = { this.nextPic }
             id = { dog.id }
             key = { dog.id }
             image = { dog.image }
             value = { dog.value }
             name = { dog.name }
             className = "userOption"
               ></Button >
               </Container>
          </Col>
        )})}
        </Row>
        </Container>
      </Wrapper>
  )
}
}

export default App;