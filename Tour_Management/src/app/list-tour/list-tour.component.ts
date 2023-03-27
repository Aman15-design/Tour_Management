import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../tour-service.service';
import { Tour } from '../tour';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.css']
})
export class ListTourComponent implements OnInit{

  tour:Tour[];
  searchQuery: string = '';


  constructor(private service:TourServiceService,private router:Router)
  {

  }

  ngOnInit() {
    this.getAllTours();
  }

  private getAllTours(){
    this.service.getTourList().subscribe(
      data=>{
        this.tour=data;
      }
    );
  }
  updateTour(id:number)
  {
    this.router.navigate(['edit-tour',id]);
  }
  deleteTour(id:number)
  {
    this.service.deleteTour(id).subscribe(
      data=>{
        console.log(data);
        this.getAllTours();
      }
    );

    window.location.reload();
  }

  
  
}
