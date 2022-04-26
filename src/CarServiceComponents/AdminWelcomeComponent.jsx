import React, { Component, useEffect } from 'react'
import '../navbar.css';
import '../style.css';
import AuthenticationService from './AuthenticationService';

export default class AdminWelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          service_Provider_name: '',
          location: 'Bangalore'
        }
        this.addCarServices = this.addCarServices.bind(this);
        this.viewUserBookings = this.viewUserBookings.bind(this);
        this.logout = this.logout.bind(this);
      }
      componentDidMount(){
        this.addCarServices();

      }

    //   componentDidUpdate(){
    //     this.addCarServices();
    //   }
      addCarServices(){
        this.props.navigate('/registerServices');
      }
      viewUserBookings(){
        this.props.navigate('/viewAllBookings')
      }

      logout(){
        console.log('Logout is clicked!')
        AuthenticationService.logout(1);
        alert('admin logged out successfully');
        this.props.navigate('/login');
      }
  render() {
      
    return (
      <div>
          <div>
        <title>Car Bookings</title>
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
                <li><a href="#" onClick={this.addCarServices} ><i className="fas fa-sliders-h"></i>Add Car Services</a></li>
                <li><a href="#" onClick={this.viewUserBookings}><i className="fas fa-sliders-h"></i>View User Bookings</a></li>
                <li><a href="#" onClick={this.logout}><i className="fas fa-envelope"></i>Logout</a></li>

                {/* <div className="icons">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-github"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
               </div> */}
              </ul>
            </nav>
          </div>
          

         
        </body>
      
      
      </div>
      </div>
    )
  }
}
