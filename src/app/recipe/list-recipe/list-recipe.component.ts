import { RecipeInfo } from './../../model/recipe';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css'],
})
export class ListRecipeComponent implements OnInit, OnDestroy {

  recipes: any[];
  filteredRecipes: RecipeInfo[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService) {
   this.subscription = this.recipeService.getListOfRecipe()
   .subscribe(recipes=>this.filteredRecipes = this.recipes = recipes);
   }
 filter(query:string){
  this.filteredRecipes = (query) ?
    this.recipes.filter(r=>r.name.toLowerCase().includes(query.toLowerCase()) 
    || r.components.toLowerCase().includes(query.toLowerCase())) :
    this.recipes;
 }
 ngOnDestroy(): void {
  this.subscription.unsubscribe();
   
 }
  ngOnInit() {
  }

}
