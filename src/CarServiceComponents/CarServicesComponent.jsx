import { Component } from 'react';
import '../navbar.css';
import { Navigate } from 'react-router-dom'
import NavBarComponent from './NavBarComponent'
import '../style.css';
import LoginComponent from './LoginComponent';
class CarServicesComponent extends Component {

  render() {
    return (
      <div>
          <NavBarComponent val = "Car Services Component"></NavBarComponent>
      </div>
    )
  }
  

  
}

export default CarServicesComponent;
