import React, { Component } from 'react'
import CarServicesApi from '../ApiServices/CarServicesApi';

export default class SubServicesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subServices: [],
            price: 0
        }
        this.refreshSubServices = this.refreshSubServices.bind(this)
        this.calculatePrice = this.calculatePrice.bind(this)
        this.payment = this.payment.bind(this)
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
        return (
            <div>
                <div className="container">
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
        console.log(price)
        if (price == 0)
            alert('select any service');
        else
            this.props.navigate('/paymentComponent')
    }

    calculatePrice(id, cost) {
        var status = document.getElementById(id);
        var x = status.checked
        console.log(x)
        if (x === true)
            this.setState({ price: this.state.price + cost })
        else this.setState({ price: this.state.price - cost })
    }


}
