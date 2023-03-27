package com.example.TourManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.TourManagement.model.Tour_Details;
import com.example.TourManagement.service.TourService;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class Tour_Controller {
    
    @Autowired
    TourService tour_service;

    @PostMapping("/addTour")
    public Tour_Details addTour(@RequestBody Tour_Details tour)
    {
        return tour_service.saveTourDetails(tour);
    }

    
    @GetMapping("/showall")
    public List<Tour_Details> Show_All_Tour()
    {
        return tour_service.Show_All_Tour();
    }

    @GetMapping("/show/{id}")
    public Tour_Details Show_Tour(@PathVariable int id)
    {
        return tour_service.Show_tour(id);
    }

    @PostMapping("/editTour/{id}")
    public Tour_Details updateTour(@PathVariable int id,@RequestBody Tour_Details tour) {
        return tour_service.updateTour(id,tour);
    }

    @PostMapping("/deleteTour/{id}")
    public String deletTour(@PathVariable int id)
    {
        return tour_service.deleteById(id);
    }
}
