import { Component } from 'react';
import '../navbar.css';
import { Navigate } from 'react-router-dom'

class WelcomeComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       email: '',
//       password: '',
//       hasLoginFailed: false,
//       showSuccessMessage: false
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.LoginPage = this.LoginPage.bind(this);
//   }
  render() {
    return (
      <div className="container">
       
      </div>
    )
  }
  handleChange(event) {
    // console.log(event.target.value)
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }

  


}

export default WelcomeComponent;
