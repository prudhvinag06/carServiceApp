package com.example.carServices.carServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001/")

public class CarRestServices {
    @Autowired
    private ServicesHardCoded servicesHardCoded;

    @GetMapping("/users/city/services/getAllServices")
    public List<Services> getAllServices(){
        return servicesHardCoded.getServices();
    }

    @PostMapping("/users/register/")
    public String addUser(@RequestBody Details details){
        System.out.println("reached here !!" + details.getEmail());
        return "Hello Reached here!";
    }
}
