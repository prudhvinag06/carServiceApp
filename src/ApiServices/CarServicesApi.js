import axios from "axios";


class CarServicesApi{
    createUser = async (name, details) => {
        console.log(details);
        const res = await axios.post(`http://localhost:8557/users/register/`, details)
        console.log(res);
        return res;
    }

    createService(){
        console.log('Reached createService axiom')
    }
}

export default new CarServicesApi();
