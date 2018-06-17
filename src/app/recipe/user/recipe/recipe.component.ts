import { RecipeService } from './../../../service/recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeInfo } from '../../../model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipes: RecipeInfo[];
  filteredRecipes: RecipeInfo[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService) { 
  this.subscription = this.recipeService.getListOfRecipe()
  .subscribe(recipes=>this.filteredRecipes = this.recipes = recipes)
}
  ngOnInit() {
  }
 filter(query:string){
   this.filteredRecipes = (query) ?
    this.recipes.filter(r=>r.name.toLowerCase().includes(query.toLowerCase()) 
    || r.components.toLowerCase().includes(query.toLowerCase()))
    :
    this.recipes;
   
 }
 ngOnDestroy(): void {
  this.subscription.unsubscribe();
   
 }
}
