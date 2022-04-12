
import React, { Component } from 'react'
import '../App.css';
import '../App2.css';
export default class AdminComponent extends Component {
  render() {
    return (
      <div className="container">
          <h1>Admin Services Page</h1>
          <p>Please fill services details</p>
          <form>
          {/* <div className="container signin">
            <p>New user? <a href="#" onClick={this.Signup}>Sign up</a>.</p>
          </div> */}
          

          {/* <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required value={this.state.email} onChange={this.handleChange}></input>

          <label for="psw"><b>Password</b></label>
          <input type = "password" placeholder="Enter Password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>         
          <button type="submit" className="registerbtn" onClick={this.LoginClicked}>Login</button> */}
      
        </form>




      </div> 
    )
  }
}
