import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from './tour';

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {

  private baseURL="http://localhost:8889"
  constructor(private httpClient:HttpClient) { }

  getTourList():Observable<Tour[]>
  {
    return this.httpClient.get<Tour[]>(`${this.baseURL}/showall`);
  }

  addNewTour(tour:Tour):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addTour`,tour);
  }

  getTourById(id:number): Observable<Tour>
  {
    console.log(id);
    const new_url=this.baseURL+"/show/"+id.toString();
    console.log(new_url);
    return this.httpClient.get<Tour>(`${new_url}`);
  }

  updateTour(id:number,tour:Tour):Observable<Object>{
    console.log(id);
    const new_url=this.baseURL+"/editTour/"+id.toString();
    console.log(new_url)
    return this.httpClient.post(`${new_url}`,tour);
  }

  deleteTour(id:number):Observable<Object>{
    const new_url=this.baseURL+"/deleteTour/"+id.toString();
    return this.httpClient.post(`${new_url}`,id);
  }
}
