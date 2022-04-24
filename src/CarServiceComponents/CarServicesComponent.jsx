import { Component } from 'react';
import '../navbar.css';
import '../style.css';
import CarServicesApi from '../ApiServices/CarServicesApi';
import AuthenticationService from './AuthenticationService';
class CarServicesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      selectedLocation: 'Bangalore'
    }
    this.carServicesComp = this.carServicesComp.bind(this);
    this.carBookingsComp = this.carBookingsComp.bind(this);
    this.refreshServices = this.refreshServices.bind(this);
    this.onBook = this.onBook.bind(this);
    this.logout = this.logout.bind(this);
    this.onDropDownChange = this.onDropDownChange.bind(this);
  }
  onDropDownChange(){
    this.componentDidMount();
  }
  componentDidMount() {
    this.refreshServices();
    console.log("Mount Component", this.state.selectedLocation)
  }
  refreshServices() {
    const value = []
    
    CarServicesApi.getServicesWithLocation(this.state.selectedLocation).then((response) =>
      this.setState({ services: response.data })
    )
    console.log(this.state.services)
  }
  render() {
    return (
      <div>

        <div>
          <label for="cars">Choose a location:</label>
          {/* Below is an async setState call which can be very useful */}
          <select id = "location" onChange = {(e) => this.setState({selectedLocation : document.getElementById('location').value}, () => {this.onDropDownChange()})} name="cars">

            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>

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
                    <li><a href="#" onClick={this.contactComp}><i className="fas fa-envelope"></i>Contact us</a></li>
                    <li><a href="#" onClick={this.logout}><i className="fas fa-envelope"></i>Logout</a></li>

                  </ul>
                </nav>
              </div>

              <div className="container">
                <table className="table">
                  <h1>Car Services</h1>
                  <tr>
                    <th>id</th>
                    <th>Service Centre Name</th>
                    <th>location</th>

                  </tr>
                  <tbody>
                    {

                      this.state.services.map(
                        service =>

                          <tr>
                            <td>{service.id} </td>
                            <td>{service.serviceName} </td>
                            <td>{service.location} </td>

                            <td><button className="btn btn-success" onClick={() => this.onBook(service.id, service.serviceName)} >Book</button></td>
                          </tr>
                      )
                    }

                  </tbody>
                </table>

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
  

  onBook(id, serviceName) {
    console.log("clicked on Book");
    this.props.navigate(`/subservicesDisplay/${id}/${serviceName}`)
    //  this.props.navigate(`/subservicesRegistration/${response.data}`)
  }

  logout() {
    console.log('Logout is clicked!')
    AuthenticationService.logout();
    alert('logged out successfully');
    this.props.navigate('/login');
  }


}

export default CarServicesComponent;
