package com.example.carServices.carServices.sql;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
public interface BookServiceJpaRepository extends JpaRepository<BookingsDetails, Long> {
    @Query(value = "select * from Bookings_Details where user_id = ?1", nativeQuery = true)
    List<BookingsDetails> findByUser_Id(Long user_id);

    @Query(value = "select * from Bookings_Details where status  = true", nativeQuery = true)
    List<BookingsDetails> findAllWithStatusIsTrue();

    @Transactional
    @Modifying
    @Query(value = "update Bookings_Details set status = false where booking_id = ?1", nativeQuery = true)
    void updateStatus(Long bookingid);
}
