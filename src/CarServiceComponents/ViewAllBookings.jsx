import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService';
import CarServicesApi from '../ApiServices/CarServicesApi';

export default class ViewAllBookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
          services : [],
          message : null
        }
        this.addCarServices = this.addCarServices.bind(this);
        this.viewUserBookings = this.viewUserBookings.bind(this);
        this.logout = this.logout.bind(this);
        this.completedServicing = this.completedServicing.bind(this);
        this.refreshServices = this.refreshServices.bind(this);
      }
      refreshServices(){
        CarServicesApi.getAllBookings().then(
          (response) =>
        this.setState({ services: response.data })
      )
      }
      componentDidMount(){
        this.refreshServices();
      }
        addCarServices(){
            this.props.navigate('/registerServices');
        }
      viewUserBookings(){
        this.props.navigate('/viewAllBookings')
        this.componentDidMount();
      }
      completedServicing(booking_id){
       //   alert('this button clicked')
          CarServicesApi.setBookingStatus(booking_id).then(
            response =>{
              this.setState({message : "not null"});
              this.refreshServices();
            } 
            );
         

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

                
              </ul>
            </nav>
          </div>
          <div className="container">
                <table className="table">
                {this.state.message && <div className='alert alert-success'>Service Completed</div>}
                  <h1>Car Services</h1>
                  <tr>
                    <th>id</th>
                    <th>User id</th>
                    <th>cost</th>
                    <th>Status</th>

                  </tr>
                  <tbody>
                    {

                      this.state.services.map(
                        service =>

                          <tr>
                            <td>{service.booking_id} </td>
                            <td>{service.user_id} </td>
                            <td>{service.cost} </td>
                            
                            <td><button className="btn btn-success" onClick={() => this.completedServicing(service.booking_id)} >Completed</button></td>
                          </tr>
                      )
                    }

                  </tbody>
                </table>

              </div>

         
        </body>
      </div>

      
      </div>    )
  }
}
