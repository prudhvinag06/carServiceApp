import React, { Component } from 'react'
import CarServicesApi from '../ApiServices/CarServicesApi';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import AuthenticationService from './AuthenticationService';
import moment from "moment";
 


export default class SubServicesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subServices: [],
            price: 0,
            user_id : 0,
            date : moment(new Date()).format('YYYY-MM-DD')
        }
        this.refreshSubServices = this.refreshSubServices.bind(this)
        this.calculatePrice = this.calculatePrice.bind(this)
        this.payment = this.payment.bind(this)
        this.back = this.back.bind(this)
    }

    componentDidMount() {
        this.refreshSubServices();
    }
    refreshSubServices() {
        CarServicesApi.getSubServices(this.props.params.id).then((response) =>
            this.setState({ subServices: response.data })
        )
    }


    render() {
        const { navigation } = this.props;
        return (
            <div>
                <div className="container">
                    <button className = "btn btn-success" id = "btn btn-success" onClick = {this.back}>back</button>
                    <table className="table">
                        <h1>Select the car services</h1>
                        <tr>
                            <th></th>
                            {/* <th>Id</th> */}
                            <th>Description</th>
                            <th>Cost</th>
                        </tr>
                        <tbody>
                            {
                                this.state.subServices.map(
                                    subServices =>
                                        <tr>
                                            <span><input size={1} type="checkbox" id={subServices.id} name="period" onChange={() => this.calculatePrice(subServices.id, subServices.cost)} /></span>
                                            {/* <td>{subServices.id}</td> */}
                                            <td>{subServices.service_name}</td>
                                            <td>{subServices.cost} </td>
                                        </tr>
                                )
                            }
                            <tr>
                                <h2>Total : ₹{this.state.price}</h2>
                            </tr>
                            <tr>
                                <td><button type="button" className="btn btn-success" onClick={() => this.payment(this.state.price)} >Complete Payment</button></td>

                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        )
    }

    payment(price) {
        let userId = sessionStorage.getItem('authenticatedUser_id');
        // alert(userId)
        // console.log(price)
        if (price == 0)
            alert('select any service');
        else{
            let emailId = sessionStorage.getItem('authenticatedUser');
            console.log(emailId);
            CarServicesApi.bookServices({
                cost : price,
                user_id : userId,
                service_id : this.props.params.id,
                status : true,
                date : this.state.date,
                service_name : this.props.params.serviceName
            });
            this.props.navigate(`/paymentComponent/${userId}/${this.props.params.id}/${this.state.price}`)            
        }
            
    }
    back(){
        this.props.navigate(-1)
    }
    calculatePrice(id, cost) {
        var status = document.getElementById(id);
        var x = status.checked
       // console.log(x)
        if (x === true)
            this.setState({ price: this.state.price + cost })
        else this.setState({ price: this.state.price - cost })
    }


}
