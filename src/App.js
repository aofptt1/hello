import React, { Component } from 'react';
import SayHello from './Components/SayHello';
import Boder from './Components/Boder';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "ANUCHIT PHEWNUAL",
      age:23
    };
  }
  incrementAge(){
    this.setState({age: this.state.age+1});
  }
  decrementAge(){
    this.setState({age: this.state.age-1});
  }
 
  render() {
    return (
      <div className="App">

      <SayHello name={this.state.name} age={this.state.age} /> 


      <div
         style={{
           width: this.state.age,
           border: 2,
           borderStyle: "solid",
           color: "#deab53"
         }}
       />


      <Boder>
      <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>
      <button onClick={() => this.decrementAge()}>ลดอายุ</button>

      </Boder>
     

      


      </div>
      
    );
  }
}

export default App;
