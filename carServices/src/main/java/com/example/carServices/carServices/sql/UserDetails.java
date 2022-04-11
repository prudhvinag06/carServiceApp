package com.example.carServices.carServices.sql;

import org.springframework.context.annotation.Primary;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserDetails {
    @Id
    @GeneratedValue
    private long user_id;

    public UserDetails(long user_id, String username, String email, String password, long booking_id) {
        this.user_id = user_id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.booking_id = booking_id;
    }

    protected UserDetails(){}

    private String username;
    private String email;
    private String password;
    private long booking_id;


    public long getUser_id() {
        return user_id;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(long booking_id) {
        this.booking_id = booking_id;
    }






}
