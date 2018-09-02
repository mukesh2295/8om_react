import React, { Component } from 'react';
import classes from './Home.css';
class Home extends Component {
  render() {
    return (
        <div className="Home">   
          <div className = "Home_inner">     
            <h1 style={{color:'white'}}>Grow up your buisnesses </h1> 
            <h6 style={{color:'white'}}> Duis auto cure dollar represndent in official desrum molitanim id velt esse</h6>
            <h6 style={{color:'white'}}>cillum  dollore eu fugiat nulla pariature </h6>
            <input className = "Home_input_email" type="text" placeholder="Email" name="email"/>
            <button type="button" className = "home_button" >Suscribe </button>   
          </div>    
        </div>
    );
  }
}

export default Home;