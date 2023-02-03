import React, { Component } from 'react'

export class Header extends Component {
  constructor() {
    super();
    this.state={
      name:"LifeCycle"
    }
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
componentDidUpdate() {
  console.log("componentDidUpdate");
}
  render() {
    console.log("render");
    return (
      <div>Header class
      {this.state.name}{" "}
      <button 
        onClick={()=>{
          this.setState({name:"React Lifecycle"}, ()=> {
            console.log(this.state.name);
          });
        }}>update</button>
      </div>
    )
  }
}

export default Header