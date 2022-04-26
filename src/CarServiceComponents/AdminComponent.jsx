
import React, { Component } from 'react'
import '../App.css';
import '../App2.css';
import CarServicesApi from '../ApiServices/CarServicesApi';
import AuthenticationService from './AuthenticationService';
import { Navigate } from 'react-router-dom'

export default class AdminComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      service_Provider_name: '',
      address : '',
      image_link : '',
      location: 'Bangalore'
    }
    this.addCarServices = this.addCarServices.bind(this);
    this.viewUserBookings = this.viewUserBookings.bind(this);
    this.logout = this.logout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.RegisterService = this.RegisterService.bind(this);


  }
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
          <div>
        <title>Car Bookings</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

       
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

                
              </ul>
            </nav>
          </div>
          

         
       
      
      
      </div>
      </div> 
      <div className="container">
        {/* <button className = "btn btn-success btncolor" id = "btn btn-success" onClick = {this.logout}>logout</button> */}


        <h1>Admin Services Page</h1>
        <p>Please fill services details</p>
        <form>

          <label><b>Service Provider Name</b></label>
          <input type="text" placeholder="Enter Provider Name" name="service_Provider_name" id="email" required value={this.state.service_Provider_name} onChange={this.handleChange}></input>

          <input type="text" placeholder="Address" name="address" id="address" required value={this.state.address} onChange={this.handleChange}></input>
          <input type="text" placeholder="Image Link" name="image_link" id="email" required value={this.state.image_link} onChange={this.handleChange}></input>


          <select name="location" id="location" required value={this.state.location} onChange={this.handleChange}>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
          <div><button type="button" className="registerbtn" onClick={this.RegisterService}>Register Service</button></div>


        </form>




      </div>
      </div>
    )
  }

  handleChange(event) {
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }
  // logout(){
  //   console.log('Logout is clicked!')
  //   AuthenticationService.logout(1);
  //   alert('admin logged out successfully');
  //   this.props.navigate('/login');
  // }
  RegisterService() {
    console.log(this.state.service_Provider_name);
    console.log(this.state.location);
    CarServicesApi.RegisterService({
      serviceName: this.state.service_Provider_name,
      location: this.state.location,
      address : this.state.address,
      imageLink : this.state.image_link
    }).then(
      (response) => {
        alert(response.data);
        alert('Service Registered Successfully')
        this.props.navigate(`/subservicesRegistration/${response.data}`)
        console.log("Reached here")
      }
    ).catch(
      () => {
        alert('Error Registering. Try using different name for service');

      }
    )

    //  this.props.navigate('/servicesDetails')
  }
}
