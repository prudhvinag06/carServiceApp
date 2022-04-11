package com.example.carServices.carServices.sql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class BookingsDetails{

    public BookingsDetails(){}

    public long getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(long booking_id) {
        this.booking_id = booking_id;
    }

    public long getUser_id() {
        return user_id;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }

    public long getService_id() {
        return service_id;
    }

    public void setService_id(long service_id) {
        this.service_id = service_id;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Id
    @GeneratedValue
    private long booking_id;

    private long user_id;
    private long service_id;
    private boolean status;
    private String date;

    public BookingsDetails(long booking_id, long user_id, long service_id, boolean status, String date) {
        this.booking_id = booking_id;
        this.user_id = user_id;
        this.service_id = service_id;
        this.status = status;
        this.date = date;
    }




}