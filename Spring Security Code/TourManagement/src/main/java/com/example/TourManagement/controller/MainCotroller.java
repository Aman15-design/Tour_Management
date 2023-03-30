package com.example.TourManagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.TourManagement.model.User;
import com.example.TourManagement.service.UserService;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class MainCotroller {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @GetMapping("/login")
    public String login()
    {
        return "login";
    }

   
    }

