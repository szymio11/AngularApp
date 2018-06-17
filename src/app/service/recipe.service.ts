import { AppConfig } from './../app.config';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddRecipe } from '../recipe/add-recipe';
import { RecipeInfo, RecipeUpdate } from '../model/recipe';

const httpOptions ={
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeList:any[];
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
    return this.http.get<any[]>(this.config.apiUrl+"recipe").pipe(map((data : any[]) => {
      return data as any[];
    }))
  }
  getRecipeUpdate(recipeId) {
    return this.http.get<RecipeUpdate>(this.config.apiUrl+"recipe" + '/' + recipeId+'/update')
  }
  getRecipe(recipeId) {
    return this.http.get<RecipeInfo>(this.config.apiUrl+"recipe" + '/' + recipeId)
  }
  updateRecipe(recipeId,entity: AddRecipe) {
    console.log(entity)
 
   return this.http.put(this.config.apiUrl + "recipe" + '/' + recipeId,JSON.stringify(entity) ,httpOptions)
     
  }
  delete(recipeId){
    return this.http.delete(this.config.apiUrl + "recipe" + '/' + recipeId)
  }
}
