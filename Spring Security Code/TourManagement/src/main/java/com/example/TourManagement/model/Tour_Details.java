package com.example.TourManagement.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tour_Details {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private int id;

    @Column(name="TOUR_NAME")
    private String Tour_Name;

    @Column(name="FROM_DATE")
    private Date From_date;

    @Column(name="TO_DATE")
    private Date To_date;

    @Column(name="Hotel")
    private String Hotel;

    @Column(name="Visa_Required")
    private String Visa_Required;

    @Column(name="Price")
    private float Price;

    public String getHotel() {
        return Hotel;
    }

    public Tour_Details(String tour_Name, Date from_date, Date to_date, String hotel, String visa_Required, float price,
            String destination) {
        super();
        Tour_Name = tour_Name;
        From_date = from_date;
        To_date = to_date;
        Hotel = hotel;
        Visa_Required = visa_Required;
        Price = price;
        Destination = destination;
    }

    public void setHotel(String hotel) {
        Hotel = hotel;
    }

    public String getVisa_Required() {
        return Visa_Required;
    }

    public void setVisa_Required(String visa_Required) {
        Visa_Required = visa_Required;
    }

    public float getPrice() {
        return Price;
    }

    public void setPrice(float price) {
        Price = price;
    }

    
    public Tour_Details()
    {

    }
   
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTour_Name() {
        return Tour_Name;
    }

    public void setTour_Name(String tour_Name) {
        Tour_Name = tour_Name;
    }

    public Date getFrom_date() {
        return From_date;
    }

    public void setFrom_date(Date from_date) {
        From_date = from_date;
    }

    public Date getTo_date() {
        return To_date;
    }

    public void setTo_date(Date to_date) {
        To_date = to_date;
    }

    public String getDestination() {
        return Destination;
    }

    public void setDestination(String destination) {
        Destination = destination;
    }

    @Column(name="DESTINATION")
    private String Destination;

    
    
    
}
