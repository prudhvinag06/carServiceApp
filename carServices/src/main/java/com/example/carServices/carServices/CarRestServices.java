package com.example.carServices.carServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")

public class CarRestServices {
    @Autowired
    private ServicesHardCoded servicesHardCoded;

    @GetMapping("/users/city/services/getAllServices")
    public List<Services> getAllServices(){
        return servicesHardCoded.getServices();
    }
}
