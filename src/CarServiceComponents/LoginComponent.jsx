import { Component } from 'react';
import '../App.css';
import '../App2.css';
import { Navigate } from 'react-router-dom'

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.Signup = this.Signup.bind(this);
    this.LoginClicked = this.LoginClicked.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1>Car Service Login</h1>
        <p>Please fill details to login</p>
        <form>
          <div className="container signin">
            <p>New user? <a href="#" onClick={this.Signup}>Sign up</a>.</p>
          </div>
          

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required value={this.state.email} onChange={this.handleChange}></input>

          <label for="psw"><b>Password</b></label>
          <input type = "password" placeholder="Enter Password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>         
          <button type="submit" className="registerbtn" onClick={this.LoginClicked}>Login</button>

        </form>


      </div>
    )
  }
  LoginClicked(){
    console.log('Login Button Clicked!')
    this.props.navigate('/welcomePage')
  }

  handleChange(event) {
    // console.log(event.target.value)
    this.setState(
      { [event.target.name]: event.target.value }
    )
  }

  Signup() {
    console.log('Signup Clicked!');
    this.props.navigate(`/signup`)
  }

 


}

export default LoginComponent;
