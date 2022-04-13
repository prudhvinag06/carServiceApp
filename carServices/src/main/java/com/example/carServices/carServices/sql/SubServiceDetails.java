package com.example.carServices.carServices.sql;

import javax.persistence.*;

@Entity
public class SubServiceDetails {
    public SubServiceDetails(){}
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getService_name() {
        return service_name;
    }

    public void setService_name(String service_name) {
        this.service_name = service_name;
    }

    public long getCost() {
        return cost;
    }

    public void setCost(long cost) {
        this.cost = cost;
    }

    public long getServiceProvider_id() {
        return serviceProvider_id;
    }

    public void setServiceProvider_id(long serviceProvider_id) {
        this.serviceProvider_id = serviceProvider_id;
    }

    public SubServiceDetails(long id, String service_name, long cost, long serviceProvider_id) {
        this.id = id;
        this.service_name = service_name;
        this.cost = cost;
        this.serviceProvider_id = serviceProvider_id;
    }

    @Id
    @GeneratedValue
    private long id;
    @Column(unique = true)
    private String service_name;
    private long cost;
    private long serviceProvider_id;
}
