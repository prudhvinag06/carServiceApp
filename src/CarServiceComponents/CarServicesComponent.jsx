import { Component } from 'react';
import '../navbar.css';
import { Navigate } from 'react-router-dom'
import NavBarComponent from './NavBarComponent'
import '../style.css';
import LoginComponent from './LoginComponent';
class CarServicesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        }
        this.carServicesComp = this.carServicesComp.bind(this);
        this.carBookingsComp = this.carBookingsComp.bind(this);
      }
  render() {
    return (
      <div>
          {/* <NavBarComponent val = "Car Services Component"></NavBarComponent> */}

          <div>
          {/* <NavBarComponent val = "Car Bookings Component"></NavBarComponent> */}
          {/* <h1>Car Bookings Component</h1> */}

          <div>
        <title>Car Services</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

        <body>
          <div className="wrapper">
            <input type="checkbox" id="btn" hidden />
            <label for="btn" className="menu-btn">
              <i className="fas fa-bars"></i>
              <i className="fas fa-times"></i>
            </label>
            <nav id="sidebar">
              <div className="title">
                CarService
              </div>
              <ul className="list-items">
                <li><a href="#" onClick={this.carServicesComp} ><i className="fas fa-sliders-h"></i>Car Services</a></li>
                <li><a href="#" onClick={this.carBookingsComp}><i className="fas fa-sliders-h"></i>Bookings</a></li>
                <li><a href="#" onClick={this.myAccountComp}><i className="fas fa-address-book"></i>My Account</a></li>
                <li><a href="#" onClick={this.settingsComp}><i className="fas fa-cog"></i>Settings</a></li>
                {/* <li><a href="#"><i class="fas fa-stream"></i>Features</a></li>
               <li><a href="#"><i class="fas fa-user"></i>About us</a></li>
               <li><a href="#"><i class="fas fa-globe-asia"></i>Languages</a></li> */}
                <li><a href="#" onClick={this.contactComp}><i className="fas fa-envelope"></i>Contact us</a></li>
                {/* <div className="icons">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-github"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
               </div> */}
              </ul>
            </nav>
          </div>
          <div className="content">
            <div className="header">
              Car Services Component
            </div>
            {/* <p>
            using only HTML and CSS
         </p> */}
          </div>
        </body>
      </div>
      </div>
      </div>
    )
  }
  carServicesComp() {
    console.log("services")
    this.props.navigate('/carServices')
  }

  carBookingsComp() {
    console.log("bookinsadffsfgs");
    this.props.navigate('/carBookings')
  }

  
}

export default CarServicesComponent;