import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TourServiceService } from '../tour-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit{
  errorMsg: string = '';
  tour:Tour = new Tour();
  constructor(private tourservice:TourServiceService, private router:Router){

  }
  ngOnInit(): void {
      
  }
  savetour(){
    this.tourservice.addNewTour(this.tour).subscribe(
      data=>{
        console.log(data);
        this.goToTourList(); 
      },
      error=>console.log(error)
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
    this.savetour();
  }

  
}
