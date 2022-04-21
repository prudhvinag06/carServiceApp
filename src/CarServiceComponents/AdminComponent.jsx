
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
      location: 'Bangalore'
    }
    this.handleChange = this.handleChange.bind(this);
    this.RegisterService = this.RegisterService.bind(this);
    this.logout = this.logout.bind(this)

  }

  render() {
    return (
      <div className="container">
        <button className = "btn btn-success btncolor" id = "btn btn-success" onClick = {this.logout}>logout</button>


        <h1>Admin Services Page</h1>
        <p>Please fill services details</p>
        <form>

          <label><b>Service Provider Name</b></label>
          <input type="text" placeholder="Enter Provider Name" name="service_Provider_name" id="email" required value={this.state.service_Provider_name} onChange={this.handleChange}></input>



          <select name="location" id="location" required value={this.state.location} onChange={this.handleChange}>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
          <div><button type="button" className="registerbtn" onClick={this.RegisterService}>Register Service</button></div>


        </form>




      </div>
    )
  }

  handleChange(event) {
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }
  logout(){
    console.log('Logout is clicked!')
    AuthenticationService.logout(1);
    alert('admin logged out successfully');
    this.props.navigate('/login');
  }
  RegisterService() {
    console.log(this.state.service_Provider_name);
    console.log(this.state.location);
    CarServicesApi.RegisterService({
      serviceName: this.state.service_Provider_name,
      location: this.state.location
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
