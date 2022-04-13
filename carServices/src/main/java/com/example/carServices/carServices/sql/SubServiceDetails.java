package com.example.carServices.carServices.sql;

import javax.persistence.*;

@Entity
public class SubServiceDetails {

    @Id
    @GeneratedValue
    private long service_id;
    @Column(unique = true)
    private String service_name;
    private long cost;
    
    private long serviceProvider_id;
}
