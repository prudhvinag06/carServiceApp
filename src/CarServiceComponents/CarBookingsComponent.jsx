import { Component } from 'react';
import '../navbar.css';
import '../style.css';
import AuthenticationService from './AuthenticationService';
import CarServicesApi from '../ApiServices/CarServicesApi';
class CarBookingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bookings : []
        }
        this.carServicesComp = this.carServicesComp.bind(this);
        this.carBookingsComp = this.carBookingsComp.bind(this);
        this.logout = this.logout.bind(this);
      }
  componentDidMount() {
    this.refreshServices();
        //console.log("Mount Component", this.state.selectedLocation)
  }

  refreshServices() {
    const value = []
    // CarServicesApi.getServicesWithLocation(this.state.selectedLocation).then((response) =>
    //   this.setState({ bookings: response.data })
    // )
    const user_id = sessionStorage.getItem('authenticatedUser_id')
    CarServicesApi.getCurrentBookings(user_id).then((response) => 
    //console.log(response.data)
      this.setState({bookings : response.data})
    );
    console.log(user_id)
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
                <li><a href="#" onClick={this.carServicesComp} ><i className="fas fa-sliders-h"></i>Car Services</a></li>
                <li><a href="#" onClick={this.carBookingsComp}><i className="fas fa-sliders-h"></i>Bookings</a></li>
                <li><a href="#" onClick={this.myAccountComp}><i className="fas fa-address-book"></i>My Account</a></li>
                <li><a href="#" onClick={this.settingsComp}><i className="fas fa-cog"></i>Settings</a></li>
                {/* <li><a href="#"><i class="fas fa-stream"></i>Features</a></li>
               <li><a href="#"><i class="fas fa-user"></i>About us</a></li>
               <li><a href="#"><i class="fas fa-globe-asia"></i>Languages</a></li> */}
                <li><a href="#" onClick={this.contactComp}><i className="fas fa-envelope"></i>Contact us</a></li>
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
          <div className="content">
            
            
          </div>

          <div className="container">
                <table className="table">
                  <h1>Current Car Bookings : </h1>
                  <tr>
                    <th>Service Centre Name</th>
                    <th>Price</th>
                    <th>Booking Date</th>
                    <th>Booking ID</th>
                    <th>Status</th>

                  </tr>
                  <tbody>
                    {
                      this.state.bookings.map(
                        booking =>
                          <tr>
                            <td>{booking.service_name}</td>
                            <td>{booking.cost} </td>
                            <td>{booking.date} </td>
                            <td>{booking.booking_id} </td>
                            <td>{booking.status === true? "Servicing" : "Completed"}</td>
                          </tr>
                      )
                    }

                  </tbody>
                </table>

              </div>
        </body>
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
  
  logout(){
    console.log('Logout is clicked!')
    AuthenticationService.logout(0);
    alert('logged out successfully');
    this.props.navigate('/login');
  }
  
}

export default CarBookingsComponent;
