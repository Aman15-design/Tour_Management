package com.example.TourManagement.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.example.TourManagement.controller.dto.UserRegistrationDto;
import com.example.TourManagement.model.User;

public interface UserService extends UserDetailsService{

    // this is the method that will just save User Registered data
    User save(UserRegistrationDto registrationDto);
}