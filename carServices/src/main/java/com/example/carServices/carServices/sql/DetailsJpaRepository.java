package com.example.carServices.carServices.sql;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetailsJpaRepository extends JpaRepository<UserDetails, Long> {
    UserDetails findUserDetailsByEmailAndPassword(String email, String password);
}
