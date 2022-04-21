import React, { Component } from 'react'
import CarServicesApi from '../ApiServices/CarServicesApi';
import { useNavigate } from 'react-router-dom';



export default class SubservicesRegistration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_service: this.props.params.id,
            sub_service_name: '',
            cost: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.RegisterSubService = this.RegisterSubService.bind(this);
        this.back = this.back.bind(this)

    }

    render() {
       
        console.log(this.props.params.id)
        return (
            <div>

                <div className="container">
                    <button className = "btn btn-success" id = "btn btn-success" onClick = {this.back}>back</button>

                    <h1>Admin Sub-Services Registration</h1>
                    <p>Please fill sub-services details</p>

                    <form>
                        <div className="container">
                            
                            <form>
                                <label><b>Sub Service Name</b></label>
                                <input type="text" placeholder="Enter Sub Service Name" name="sub_service_name" id="sub_service_name" required value={this.state.sub_service_name} onChange={this.handleChange}></input>
                                <label><b>Sub Service Cost</b></label>
                                <div></div>
                                <input type="number" placeholder="Enter Cost" name="cost" id="cost" required value={this.state.cost} onChange={this.handleChange}></input>



                                {/* <select name="location" id="location" required value={this.state.location} onChange={this.handleChange}>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                </select> */}
                                <div><button type="button" className="registerbtn" onClick={this.RegisterSubService}>Register SubService</button></div>


                            </form>




                        </div>

                    </form>




                </div>
            </div>
        )
    }
    handleChange(event) {
        this.setState(
          { [event.target.name]: event.target.value }
        )
    }
    back(){
        this.props.navigate(-1)
    }
    RegisterSubService(){
        CarServicesApi.RegisterSubService({
            service_name : this.state.sub_service_name,
            cost : this.state.cost,
            serviceProvider_id : this.props.params.id
        }).then(
            (response) => {
              alert('Sub Service Registered Successfully')
              this.props.navigate(`/subservicesRegistration/${this.props.params.id}`)
              //console.log("Reached here")
              this.setState({sub_service_name : '', cost : ''})
            }
          ).catch(
            () => {
              alert('Error Registering. Try using different name for service');
            }
          )
    }
}
