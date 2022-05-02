package com.example.carServices;

import com.example.carServices.sql.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServicesHardCoded {
    private static List<UserDetails.Services> services = new ArrayList();
    private static long idCounter = 100000;
    static {
        services.add(new UserDetails.Services(++idCounter, "Service 1", "Bangalore", true));
        services.add(new UserDetails.Services(++idCounter, "Service 2", "Hyderabad", true));
        services.add(new UserDetails.Services(++idCounter, "Service 3", "Pathankot", true));
    }
    public List<UserDetails.Services> getServices(){
        return services;
    }
}
