import React, { Component } from 'react'
import CarServicesApi from '../ApiServices/CarServicesApi';

export default class SubServicesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subServices: [],
            price : 0
        }
        this.refreshSubServices = this.refreshSubServices.bind(this)
        this.calculatePrice = this.calculatePrice.bind(this)
    }
    
    componentDidMount() {
        this.refreshSubServices();
    }
    refreshSubServices(){
        CarServicesApi.getSubServices(this.props.params.id).then((response) =>
        this.setState({ subServices: response.data }) 
      )
    }
    calculatePrice(cost){
       // this.setState({price : this.state.price + cost})
    }
    render() {
        return (
            <div>
                {/* <h1>SubServicesPage {this.props.params.id}</h1> */}
                <div className="container">
                <table className="table">
                <h1>Car Services</h1>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Cost</th>
                            
                        </tr>
                  <tbody>
                    {
                      
                      this.state.subServices.map(
                        subServices =>
                        
                          <tr>
                            <td><input type="checkbox" id="vehicle1" value = {subServices.id} name="vehicle1" value="Bike" onClick={this.calculatePrice(subServices.id)}/></td>
                            <td>{subServices.id}</td>
                            <td>{subServices.service_name} </td>
                            <td>{subServices.cost} </td>
                            
                            {/* <td><button className="btn btn-success" onClick = {() => this.onBook(service.id)} >Book</button></td> */}
                          </tr>
                      )
                    }
                    <tr>
                        <h2>Total : {this.state.price}</h2>
                    </tr>

                  </tbody>
                </table>

              </div>
            </div>
        )
    }

    
}
