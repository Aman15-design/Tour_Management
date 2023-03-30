package com.example.TourManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TourManagement.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    // after extending this repository we are able to leverage crud operations on our user table

    //here we will write a method which will retreive a user by his/her email address
    User findByEmail(String email);
}