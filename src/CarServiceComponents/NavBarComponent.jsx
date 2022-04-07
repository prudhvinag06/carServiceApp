import { Component } from 'react';
import '../style.css';
import { Navigate } from 'react-router-dom'

class NavBarComponent extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   email: '',
        //   password: '',
        //   hasLoginFailed: false,
        //   showSuccessMessage: false
        // }
        this.MyAccount = this.MyAccount.bind(this);
        
      }
  render() {
    return (
      <div className="container">
    
        
        <title>Responsive Sidebar Menu</title>
        <link rel="stylesheet" href="style.css"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        

        <input type="checkbox" id="check"/>
        <label for="check">
            <i className="fas fa-bars" id="btn"></i>
            <i className="fas fa-times" id="cancel"></i>
        </label>


        <div className="sidebar">
      <header>CarService</header>
      <a href="#" class="active">
        <i className="fas fa-qrcode"></i>
        <span onClick={this.MyAccount}>My Account</span>
      </a>
      <a href="#">
        <i className="fas fa-link"></i>
        <span>Book a Service</span>
      </a>
      <a href="#">
        <i className="fas fa-stream"></i>
        <span>My Bookings</span>
      </a>
      <a href="#">
         <i className="fas fa-calendar"></i>
        <span>Settings</span>
      </a>
      {/* <a href="#">
        <i className="far fa-question-circle"></i>
        <span>About</span>
      </a> */}
      {/* <a href="#">
        <i className="fas fa-sliders-h"></i>
        <span>Services</span>
      </a> */}
      <a href="#">
        <i className="far fa-envelope"></i>
        <span>Contact</span>
      </a>
    </div>
      </div>
    )
  }
  
  MyAccount(){
    console.log('My Account Clicked!')
    //this.props.navigate('/welcomePage')
  }
  
}

export default NavBarComponent;
