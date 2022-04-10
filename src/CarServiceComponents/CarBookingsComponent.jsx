import { Component } from 'react';
import '../navbar.css';
import { Navigate } from 'react-router-dom'
import NavBarComponent from './NavBarComponent'
import '../style.css';
import LoginComponent from './LoginComponent';
class CarBookingsComponent extends Component {

  render() {
    return (
      <div>
          {/* <NavBarComponent val = "Car Bookings Component"></NavBarComponent> */}
          <h1>Car Bookings Component</h1>
      </div>
    )
  }
  

  
}

export default CarBookingsComponent;
