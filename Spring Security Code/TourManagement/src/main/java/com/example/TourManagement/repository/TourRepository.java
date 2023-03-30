package com.example.TourManagement.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TourManagement.model.Tour_Details;

@Repository
public interface TourRepository extends JpaRepository<Tour_Details,Integer>{
    
}
