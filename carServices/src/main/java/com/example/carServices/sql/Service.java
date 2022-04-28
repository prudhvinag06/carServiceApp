package com.example.carServices.sql;

import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
public class Service {
    public Service(){}

    @TableGenerator(name = "id", initialValue = 10000, allocationSize = 100)
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "id")
    private Long id;

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

    public Service(Long id, String serviceName, String location, String address, String imageLink) {
        this.id = id;
        this.serviceName = serviceName;
        this.location = location;
        this.address = address;
        this.imageLink = imageLink;

    }

    private String location;
    private String address;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    @Column(name = "imageLink", length = 50000)
    private String imageLink;

}