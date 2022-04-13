package com.example.carServices.carServices.sql;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Service {
    public Service(){}

    @Id
    @GeneratedValue
    private Long id = Long.valueOf(10000);

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Column(unique = true)
    private String serviceName;

    public Service(Long id, String serviceName, String location) {
        this.id = id;
        this.serviceName = serviceName;
        this.location = location;
    }

    private String location;
}
