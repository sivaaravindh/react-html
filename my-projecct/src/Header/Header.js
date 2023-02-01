import React from 'react';
import "./style.css";
import logo from "./assets/logo.png";
const Header = (props) => {
  console.log('props',props);
  return (
    <div className='Head'>Header {props.feature}
    <button onClick={()=> props.get("data")}>click</button>
      <img src={logo}/>
      <img src={require('./assets/logo.png')}/>
     
    </div>

  )
}

export default Header
  