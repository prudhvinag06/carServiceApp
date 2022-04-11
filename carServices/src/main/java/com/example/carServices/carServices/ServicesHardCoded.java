package com.example.carServices.carServices;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ServicesHardCoded {
    private static List<Services> services = new ArrayList();
    private static long idCounter = 100000;
    static {
        services.add(new Services(++idCounter, "Service 1", "Bangalore", true));
        services.add(new Services(++idCounter, "Service 2", "Hyderabad", true));
        services.add(new Services(++idCounter, "Service 3", "Pathankot", true));
    }
    public List<Services> getServices(){
        return services;
    }
}
