import { Rating } from './../model/rating';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const httpOptions ={
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
  })}
@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient, private config: AppConfig) { }
  createRating(id:string,value:any){
    return this.http.post(this.config.apiUrl+"recipe/"+id+'/rating',value,httpOptions).pipe(tap(resp=>{
      if(resp){
        return true;
      }
      else{
        return false;
      }
    }))
  }
}
