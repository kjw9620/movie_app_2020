import React from 'react';
import propTypes from "prop-types";

class App extends React.Component{
  
  constructor() {
    console.log("constructor");
  }

  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    this.setState(current => ({count: current.count+1}));
  };

  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count-1}));
  };
  
  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  render(){
    console.log("Im rendering");

    return (
      <div>
        <h1>This number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button> 
      </div>
    )
  }


}

export default App;
