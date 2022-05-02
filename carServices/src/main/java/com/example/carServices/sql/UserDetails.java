package com.example.carServices.sql;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserDetails {
    @Id
    @GeneratedValue
    private long user_id;
    @Column(unique = true)
    private String username;

    private String email;
    private String password;

    public UserDetails(long user_id, String username, String email, String password) {
        this.user_id = user_id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    protected UserDetails(){}

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

    @Entity
    public static class Services {
        @Id
        @GeneratedValue
        private long id;
        @Column(unique = true, nullable = false)
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
}
