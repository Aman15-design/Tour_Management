import { Component, OnInit } from '@angular/core';
import { TourServiceService } from '../tour-service.service';
import { Tour } from '../tour';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-tour',
  templateUrl: './update-tour.component.html',
  styleUrls: ['./update-tour.component.css']
})
export class UpdateTourComponent implements OnInit{
  errorMsg: string = '';
  constructor(private tourservice:TourServiceService, private route:ActivatedRoute,private router:Router){

  }
  tour:Tour=new Tour();
  id:number;
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id']; // we are accessing ID from route here
      this.tourservice.getTourById(this.id).subscribe(
        data=>{
          this.tour=data;
        }
        ,error=>console.log(error)
      );
  }
  goToTourList(){
    this.router.navigate(['/tours']);
  }
  onSubmit(){
    
    if (new Date(this.tour.to_date) <= new Date(this.tour.from_date)) {
      // Set the error message
      this.errorMsg = 'Invalid date range';
      return;
    }
    this.tourservice.updateTour(this.id,this.tour).subscribe(
      data=> {
        this.goToTourList();
      }
      ,error=>console.log(error)
      );
  }
}
