import axios from "axios";


class CarServicesApi{
    createUser = async (name, details) => {
        console.log(details);
        const res = await axios.post(`http://localhost:8557/users/register/`, details)
        console.log(res.data);
        return res;
    }

    createService(){
        console.log('Reached createService axiom')
    }

    RegisterService = async(service) => {
        console.log('Reached Register Service');
        const res = await axios.post("http://localhost:8557/admin/registerService/", service);
        return res;
    }
}

export default new CarServicesApi();
