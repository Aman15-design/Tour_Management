import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TourServiceService } from '../tour-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-specific-tour',
  templateUrl: './view-specific-tour.component.html',
  styleUrls: ['./view-specific-tour.component.css']
})
export class ViewSpecificTourComponent implements OnInit {
  tourId: '';
  tourData: any;
  tour:Tour[];
  
 
  searchResult: Tour;
 


  constructor(private service:TourServiceService,private router:Router,private route:ActivatedRoute)
  {

  }

  ngOnInit() {
    this.searchTour();
  }

  private searchTour() {
    this.tourId=this.route.snapshot.params['id'].toString();
    console.log("HERE"+this.tourId);
    this.service.getTourById_new(this.tourId).subscribe((data) => {
      this.tourData = data;
      console.log(this.tourData);
      console.log("HERE"+data)
    });
  

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
