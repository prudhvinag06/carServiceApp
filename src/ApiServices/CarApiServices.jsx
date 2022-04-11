import axios from "axios";
import React, {Component} from "react";


const api = axios.create({
    baseURL: 'http://localhost:8557/users/city/services/getAllServices'
})
export default class App extends Component{
    constructor(){
        super();
        api.get('/').then(res => console.log(res.data))
    }


    render(){
        return(
          <div><h1>Hello World</h1></div>  
        ) 
    }
}



