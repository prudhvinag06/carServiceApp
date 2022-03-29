import { Component } from 'react';
import '../App.css';
import '../App2.css';
import { Navigate } from 'react-router-dom'

class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.LoginPage = this.LoginPage.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <form action="action_page.php">
          <div className="container signin">
            <p>Already have an account? <a href="#" onClick={this.LoginPage}>Sign in</a>.</p>
          </div>
          <hr></hr>
          <label for="username"><b>Username</b></label>
          <input type="password" placeholder="Username" name="username" id="username" required value={this.state.username} onChange={this.handleChange}></input>
          <hr></hr>

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required value={this.state.email} onChange={this.handleChange}></input>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required value={this.state.password} onChange={this.handleChange}></input>



          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" className="registerbtn" onClick={this.on}>Register</button>

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

  LoginPage() {
    console.log('Login Clicked!');
    this.props.navigate(`/login}`)
   
  }


}

export default SignupComponent;
