package com.example.carServices.carServices.sql;

import com.example.carServices.carServices.Details;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailsJpaRepository extends JpaRepository<UserDetails, Long> {

}
