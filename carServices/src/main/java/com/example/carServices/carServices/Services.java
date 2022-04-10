package com.example.carServices.carServices;

public class Services {
    private long id;
    private String name;
    private String location;
    private boolean isAvailable;

    protected Services(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Services(long id, String name, String location, boolean isAvailable){
        this.id = id;
        this.name = name;
        this.location = location;
        this.isAvailable = isAvailable;

    }
}
