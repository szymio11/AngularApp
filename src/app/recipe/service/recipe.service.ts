import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddRecipe } from '../add-recipe';
import { AppConfig } from '../../app.config';
import { RecipeInfo } from '../recipe';
const httpOptions ={
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor(private http: HttpClient, private config: AppConfig) { }

  createRecipe(entity: AddRecipe){
    return this.http.post(this.config.apiUrl+"recipe",entity,httpOptions).pipe(tap(resp=>{
      if(resp){
        return true;
      }
      else{
        return false;
      }
    }))
  }
  getListOfRecipe() {
    return this.http.get<RecipeInfo>(this.config.apiUrl+"recipe");
  }
}
