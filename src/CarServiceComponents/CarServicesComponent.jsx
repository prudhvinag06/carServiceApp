import { Component } from 'react';
import '../navbar.css';
import '../style.css';
import '../1.css';

import CarServicesApi from '../ApiServices/CarServicesApi';
import AuthenticationService from './AuthenticationService';
class CarServicesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      selectedLocation: 'Bangalore',
      imageLink : 'https://www.drivespark.com/img/2017/01/20-1484898959-bosch-service-center-bengaluru3.jpg'
    }
    this.carServicesComp = this.carServicesComp.bind(this);
    this.carBookingsComp = this.carBookingsComp.bind(this);
    this.refreshServices = this.refreshServices.bind(this);
    this.onBook = this.onBook.bind(this);
    this.logout = this.logout.bind(this);
    this.onDropDownChange = this.onDropDownChange.bind(this);
  }
  onDropDownChange() {
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
          <select id="location" onChange={(e) => this.setState({ selectedLocation: document.getElementById('location').value }, () => { this.onDropDownChange() })} name="cars">

            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>

          <div className='navbar1'>
            <title>Car Services</title>
            <link rel="stylesheet" href="style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

            <body className='navbar1'>
              
              <div>
              <div className = "navbar1" className="wrapper">
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
              </div>
              <div className = "content" className="container mt-2">

                <div className="row">{

                  <div className="container mt-2">
                    <div class="row">{
                      this.state.services.map(
                        service =>
                          <div class="col-md-3 col-sm-6 item" >
                            <div class="card item-card card-block" >
                              {/* <h4 class="card-title text-right" ><i class="material-icons">{service.selectedLocation}</i></h4> */}
                              <img src = {service.imageLink} alt="Photo of sunset" />
                              <h5 class="item-card-title mt-3 mb-3" >{service.serviceName}</h5>
                              <p class="card-text">{service.address}</p>
                              <button className='btn btn-success' onClick={() => this.onBook(service.id, service.serviceName)}>book</button>
                            </div>
                          </div>
                      )
                    }

                    </div>


                  </div>

                }
                </div>

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
