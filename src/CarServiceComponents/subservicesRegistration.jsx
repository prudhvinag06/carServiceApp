import React, { Component } from 'react'
import {useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default class subservicesRegistration extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id_service : this.props.id,
            sub_service_name: '',
            cost: 0
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.RegisterService = this.RegisterService.bind(this);

    }

    render() {
        // const { id } = useParams();

     //   const { id } = useParams();
        console.log(this.props.params.id)
        return (
            <div>
                <div className="container">
                    <h1>Admin Services Page</h1>
                    <p>Please fill services details</p>
                    
                    <form>
                        {/* <label><b>Service Provider Name</b></label>
                        <input type="text" placeholder="Enter Provider Name" name="service_Provider_name" id="email" required value={this.state.service_Provider_name} onChange={this.handleChange}></input>



                        <select name="location" id="location" required value={this.state.location} onChange={this.handleChange}>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                        <div><button type="button" className="registerbtn" onClick={this.RegisterService}>Register Service</button></div>
 */}

                    </form>




                </div>
            </div>
        )
    }
}
