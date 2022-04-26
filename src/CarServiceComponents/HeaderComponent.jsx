import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService';
import { Link } from 'react-router-dom';
export default class HeaderComponent extends Component {
    render() {
        return (
            <div><header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.leetcode.com" className="navbar-brand">Prudhvi</a></div>
                    <ul className="navbar-nav">
                        {  <li ><Link className="navbar-nav" to="/welcome/prudhvi">Home</Link></li>}
                        { <li ><Link className="navbar-nav" to="/todos">Todos</Link> </li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        { <li ><Link className="navbar-nav" to="/login">Login</Link> </li>}
                        {  <li ><Link className="navbar-nav" to="/logout" onClick={AuthenticationService.logout}>Logout</Link> </li>}
                    </ul>
                </nav>
            </header></div>
        )
    }
}
