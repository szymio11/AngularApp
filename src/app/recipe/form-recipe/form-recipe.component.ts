import { AppRecipe } from './../recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.css']
})
export class FormRecipeComponent implements OnInit {
  recipe: AppRecipe = null;
  constructor() { }
  AddRecipe(){
    
  }
  ngOnInit() {
  }
 

}
