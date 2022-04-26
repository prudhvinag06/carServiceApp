import React, {Component} from "react";
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import withNavigation from "../utils/WithNavigation";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import CarServicesComponent from "./CarServicesComponent";
import CarBookingsComponent from "./CarBookingsComponent";
import AdminComponent from "./AdminComponent";
import ServicesDetails from "./ServicesDetails";
import SubservicesRegistration from "./SubservicesRegistration";
import SubServicesComponent from "./SubServicesComponent";
import withParams from "./WithParams.jsx";
import PaymentComponent from "./PaymentComponent";
import AdminWelcomeComponent from "./AdminWelcomeComponent";
import ViewAllBookings from "./ViewAllBookings";
import HeaderComponent from "./HeaderComponent";
import NavBarComponent from "./NavBarComponent";
class CarAppComponent extends Component{
    render(){
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const ViewAllBookingsWithNavigation = withNavigation(ViewAllBookings);
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const SignupComponentWithNavigation = withNavigation(SignupComponent);
        const WelcomeComponentWithNavigation = withNavigation(WelcomeComponent);
        const CarServicesComponentWithNavigation = withNavigation(CarServicesComponent);
        const CarBookingsComponentwithNavigation = withNavigation(CarBookingsComponent);
        const AdminComponentwithNavigation = withNavigation(AdminComponent);
        const ServicesDetailswithNavigation = withNavigation(ServicesDetails);
        const SubServicesRegistrationwithNavigation = withParams(withNavigation(SubservicesRegistration));
        const SubServicesComponentwithNavigation = withParams(withNavigation(SubServicesComponent));
        const PaymentComponentwithNavigation = withParams(withNavigation(PaymentComponent));
        const AdminWelcomeComponentwithNavigation = withNavigation(AdminWelcomeComponent);
        const NavBarComponentWithNavigation = withNavigation(NavBarComponent);
        return(
            <div className="CarApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/signup" element={<SignupComponentWithNavigation />} />
                        <Route path="/welcomePage" element={<WelcomeComponentWithNavigation />} />
                        <Route path="/carServices" element={<CarServicesComponentWithNavigation />} />
                        <Route path="/carBookings" element={<CarBookingsComponentwithNavigation />} />
                        <Route path="/registerServices" element={<AdminComponentwithNavigation />} />
                        <Route path="/servicesDetails" element={<ServicesDetailswithNavigation />} />
                        <Route path="/subservicesRegistration/:id" element={<SubServicesRegistrationwithNavigation />} />
                        <Route path="/subservicesDisplay/:id/:serviceName" element={<SubServicesComponentwithNavigation />}/>
                        <Route path="/paymentComponent/:email/:id/:price" element={<PaymentComponentwithNavigation />}/>
                        <Route path="/adminLogin" element={<AdminWelcomeComponentwithNavigation />}/>
                        <Route path="/viewAllBookings" element={<ViewAllBookingsWithNavigation />}/>

                    </Routes>
                </Router>
            </div>
        )
    }
}

export default CarAppComponent;