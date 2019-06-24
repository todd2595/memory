// import React, { Component } from "react";
// import { Col, Row, Container } from "../Grid";
// import Wrapper from "../Wrapper"
// import dogs from "../dogs.json"
// import Button from "../Button/button"
// import './style.css';

// class picDiv extends Component {
//     state = {
//         dogs,
//     };
//     componentDidMount() {
//         this.loadImg()
//     };
//     loadImg = (event) => {
//         // dogs.shuffle();
//         console.log("hi")
//         this.shuffle(dogs)
//         this.setState({
//             dogs
//         })

//         };

//      shuffle = (array) => {
//         var currentIndex = array.length;
//         var temporaryValue, randomIndex;
//         // While there remain elements to shuffle...
//         while (0 !== currentIndex) {
//             // Pick a remaining element...
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex -= 1;
//             // And swap it with the current element.
//             temporaryValue = array[currentIndex];
//             array[currentIndex] = array[randomIndex];
//             array[randomIndex] = temporaryValue;
//         }
//         return array;

//     }
    
//     render() {
//         return (
//             <Container fluid>
//                 <Row>
//                  {this.state.dogs.map(dog => {
//                      return (
//                         <Col key={dog.id} size="md-4">
//                              <Wrapper>
//                                 <Button
//                                     loadImg={this.loadImg}
//                                     id={dog.id}
//                                     key={dog.id}
//                                     image={dog.image}
//                                     value={dog.value}
//                                     className="userOption"
//                                 ></Button>
//                                 </Wrapper>
//                                 </Col>
//                             )
//                         })}

//                     </Row>
//                  </Container>
//                  )
//              }

// }

// export default picDiv;