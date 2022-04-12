
import React, { Component } from 'react'
import '../App.css';
import '../App2.css';
export default class AdminComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      service_Provider_name: '',
      location: 'Bangalore'
    }
    this.handleChange = this.handleChange.bind(this);
    this.RegisterService = this.RegisterService.bind(this);

  }

  render() {
    return (
      <div className="container">
        <h1>Admin Services Page</h1>
        <p>Please fill services details</p>
        <form>
          <label><b>Service Provider Name</b></label>
          <input type="text" placeholder="Enter Provider Name" name="service_Provider_name" id="email" required value={this.state.service_Provider_name} onChange={this.handleChange}></input>

         

          <select name="location" id="location" required value={this.state.location} onChange={this.handleChange}>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
          <div><button type="submit" className="registerbtn" onClick={this.RegisterService}>Register Service</button></div>
          

        </form>




      </div>
    )
  }

  handleChange(event) {
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }

  RegisterService(){
    console.log(this.state.service_Provider_name);
    console.log(this.state.location);
    this.props.navigate('/servicesDetails')
  }
}
