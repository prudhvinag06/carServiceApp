import axios from "axios";


class CarServicesApi{
    createUser(name, details){
        console.log(details);
        return axios.post(`http://localhost:8557/users/register/`, details)
    }
}

export default new CarServicesApi();
