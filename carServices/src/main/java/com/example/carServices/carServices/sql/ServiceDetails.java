package com.example.carServices.carServices.sql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ServiceDetails {

    @Id
    @GeneratedValue
    private long service_id;
    private String service_name;
    private long cost;
    private long serviceProvider_id;
}
