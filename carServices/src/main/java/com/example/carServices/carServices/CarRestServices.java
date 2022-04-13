package com.example.carServices.carServices;

import com.example.carServices.carServices.sql.DetailsJpaRepository;
import com.example.carServices.carServices.sql.Service;
import com.example.carServices.carServices.sql.ServiceJpaRepository;
import com.example.carServices.carServices.sql.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")

public class CarRestServices {
    @Autowired
    private ServicesHardCoded servicesHardCoded;

    @Autowired
    private DetailsJpaRepository detailsJpaRepository;

    @Autowired
    private ServiceJpaRepository serviceJpaRepository;

    @GetMapping("/users/city/services/getAllServices")
    public List<UserDetails.Services> getAllServices(){
        return servicesHardCoded.getServices();
    }

    @PostMapping("/users/register/")
    public Long addUser(@RequestBody UserDetails details){
        UserDetails details1 = detailsJpaRepository.save(details);
        //return id of user and use that to get current bookings etc
        return details.getUser_id();
    }

    @PostMapping("/admin/registerService/")
    public Long addService(@RequestBody Service service){
        Service service1 = serviceJpaRepository.save(service);
        return service1.getId();
    }
}
