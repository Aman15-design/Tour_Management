package com.example.TourManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TourManagement.model.Tour_Details;
import com.example.TourManagement.repository.TourRepository;

@Service
public class TourService {
    
    @Autowired
    TourRepository tour_repo;
    
    public List<Tour_Details> Show_All_Tour()
    {
        return tour_repo.findAll();
    }

    public Tour_Details Show_tour(int id)
    {
        return tour_repo.findById(id).orElse(null);
    }

    public Tour_Details saveTourDetails(Tour_Details tour) {
       return tour_repo.save(tour);
    }

    public Tour_Details updateTour(int id, Tour_Details tour) {
        Tour_Details update_tour = tour_repo.findById(id).orElse(null);
        update_tour.setTour_Name(tour.getTour_Name());
        update_tour.setFrom_date(tour.getFrom_date());
        update_tour.setTo_date(tour.getTo_date());
        update_tour.setDestination(tour.getDestination());
        return tour_repo.save(update_tour);
    }

    public String deleteById(int id) {
        tour_repo.deleteById(id);
        return "Delete tour with ID :"+id;
    }

}
