package com.example.carServices.carServices;

import com.example.carServices.carServices.sql.DetailsJpaRepository;
import com.example.carServices.carServices.sql.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001/")

public class CarRestServices {
    @Autowired
    private ServicesHardCoded servicesHardCoded;

    @Autowired
    private DetailsJpaRepository detailsJpaRepository;

    @GetMapping("/users/city/services/getAllServices")
    public List<Services> getAllServices(){
        return servicesHardCoded.getServices();
    }

    @PostMapping("/users/register/")
    public String addUser(@RequestBody UserDetails details){
        UserDetails details1 = detailsJpaRepository.save(details);
        return "Hello Reached here!";
    }
}
