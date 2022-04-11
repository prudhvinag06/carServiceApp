import { Component } from 'react';
import '../App.css';
import '../App2.css';
import { Navigate } from 'react-router-dom'
import CarServicesApi from '../ApiServices/CarServicesApi';

class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.LoginPage = this.LoginPage.bind(this);
    this.register = this.register.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1>Car Service Registration</h1>
        <p>Please fill in this form to create an account.</p>
        <form>
          <div className="container signin">
            <p>Already have an account? <a href="#" onClick={this.LoginPage}>Log in</a>.</p>
          </div>
          
          <label for="username"><b>Username</b></label>
          <input type="password" placeholder="Username" name="username" id="username" required value={this.state.username} onChange={this.handleChange}></input>
         

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required value={this.state.email} onChange={this.handleChange}></input>

          <label for="psw"><b>Password</b></label>
          <input type = "password" placeholder="Enter Password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>

          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" className="registerbtn" onClick={this.register}>Register</button>

        </form>
      </div>
    )
  }
  handleChange(event) {
    // console.log(event.target.value)
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }
  register(){
    console.log('register button clicked');
    CarServicesApi.createUser(this.state.username, {
      username : this.state.username,
      email : this.state.email,
      password : this.state.password
    }).then(
      () => {
        this.props.navigate('/login');
      }
    )
  }
  LoginPage() {
    console.log('Login Clicked!');
    this.props.navigate(`/login`)
   
  }


}

export default SignupComponent;
