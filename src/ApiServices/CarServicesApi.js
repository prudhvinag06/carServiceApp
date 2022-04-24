import axios from "axios";


class CarServicesApi {
    createUser = async (name, details) => {
        console.log(details);
        const res = await axios.post(`http://localhost:8557/users/register/`, details)
        console.log(res.data);
        return res;
    }

    createService() {
        console.log('Reached createService axiom')
    }

    RegisterService = async (service) => {
        console.log('Reached Register Service');
        const res = await axios.post("http://localhost:8557/admin/registerService/", service);
        return res;
    }

    bookServices = async (subservice) => {
        alert('Reached book Services');
        console.log(subservice)
        const res = await axios.post("http://localhost:8557/users/services/bookService/", subservice);
        return res;
    }

    RegisterSubService = async (service) => {
        console.log('Reached Sub Service Register Service');
        const res = await axios.post("http://localhost:8557/admin/registerService/registerSubService", service);
        return res;
    }

    getServices = async (location) => {
        console.log(location)
        console.log('Reached Sub Service Register Service');
        const res = await axios.get("http://localhost:8557/users/services/getAllServices");
       // console.log(res.data)
        return res;
    }

    getServicesWithLocation = async (location) => {
        const res = await axios.get(`http://localhost:8557/users/services/getAllServicesWithLocation/${location}`);
       // console.log(res.data)
        return res;
    }

    getSubServices = async (id) => {
        console.log('Reached Sub Service Function');
        const res = await axios.get(`http://localhost:8557/users/services/getSubServices/${id}`);
        return res;
    }

    checkLoginStatus = async (email, password) => {
        console.log('Reached Sub Service Function');
        const res = await axios.get(`http://localhost:8557/users/logincheck/${email}/${password}`);
        return res;
    }

    getUserIdFromEmail = async (email) => {
        console.log('Reached getUserIdFromUserName');
        const res = await axios.get(`http://localhost:8557/users/getIdFromUsername/${email}`);
       // console.log(res.data);
        return res;
    }

    getCurrentBookings = async (userid) => {
        console.log('Reached getUserIdFromUserName');
        const res = await axios.get(`http://localhost:8557/users/bookings/${userid}`);
        console.log(res.data);
        return res;
    }

    getAllBookings = async () => {
        console.log('Reached getUserIdFromUserName');
        const res = await axios.get(`http://localhost:8557/users/bookings`);
        console.log(res.data);
        return res;
    }

    setBookingStatus = async (booking_id) => {
       const res = await axios.put(`http://localhost:8557/users/bookings/completed/${booking_id}`);
     //  alert('reached setBookingStatus')
        return res;
    }


}

export default new CarServicesApi();
