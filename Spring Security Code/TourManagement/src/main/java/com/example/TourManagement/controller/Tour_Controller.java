package com.example.TourManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.TourManagement.model.Tour_Details;
import com.example.TourManagement.service.TourService;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class Tour_Controller {
    
    @Autowired
    TourService tour_service;
    @GetMapping("/")
    public String showAllTours2(Model model) {
        return "redirect:/showall";
}

    @GetMapping("/addTour")
    public String addTour(Model model) {
        Tour_Details tour = new Tour_Details();
        model.addAttribute("tour", tour);
        return "add_tour";
    }

    @PostMapping("/addTour")
    public String saveTour(@ModelAttribute("tour") Tour_Details tour) {
        tour_service.saveTourDetails(tour);
        return "redirect:/showall";
    }

    @GetMapping("/showall")
    public String showAllTours(Model model) {
    List<Tour_Details> tours = tour_service.Show_All_Tour();
    model.addAttribute("tours", tours);
    return "index";
}

@GetMapping("/show/{id}")
public String showTour(@PathVariable int id, Model model) {
    Tour_Details tour = tour_service.Show_tour(id);
    model.addAttribute("tour", tour);
    return "single_tour";
}
@GetMapping("/editTour/{id}")
public String showEditForm(@PathVariable("id") int id, Model model) {
    Tour_Details tour = tour_service.Show_tour(id);
    model.addAttribute("tour", tour);
    return "edit_tour";
}

@PostMapping("/editTour/{id}")
public String updateTour(@PathVariable("id") int id, @Validated @ModelAttribute("tour") Tour_Details tour) {
    tour_service.updateTour(id, tour);
    return "redirect:/showall";
}
@PostMapping("/deleteTour/{id}")
public String deleteTour(@PathVariable int id) {
    tour_service.deleteById(id);
    return "redirect:/showall";
}
}
