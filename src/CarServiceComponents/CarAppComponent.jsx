import React, {Component} from "react";
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import withNavigation from "../utils/WithNavigation";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";

class CarAppComponent extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const SignupComponentWithNavigation = withNavigation(SignupComponent);
        const WelcomeComponentWithNavigation = withNavigation(WelcomeComponent);

        return(
            <div className="CarApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/signup" element={<SignupComponentWithNavigation />} />
                        <Route path="/welcomePage" element={<WelcomeComponentWithNavigation />} />

                    </Routes>
                </Router>
            </div>
        )
    }
}

export default CarAppComponent;