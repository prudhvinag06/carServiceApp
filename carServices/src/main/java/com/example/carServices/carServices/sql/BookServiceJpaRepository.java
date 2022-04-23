package com.example.carServices.carServices.sql;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookServiceJpaRepository extends JpaRepository<BookingsDetails, Long> {
    @Query(value = "select * from Bookings_Details where user_id = ?1", nativeQuery = true)
    List<BookingsDetails> findByUser_Id(Long user_id);
}
