import { Component } from 'react';
import '../navbar.css';
import { Navigate } from 'react-router-dom'
import NavBarComponent from './NavBarComponent';
class WelcomeComponent extends Component {

  render() {
    return (
      <div className="container">
       <NavBarComponent></NavBarComponent>
      </div>
    )
  }
  handleChange(event) {
    // console.log(event.target.value)
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }

  
}

export default WelcomeComponent;
