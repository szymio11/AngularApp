import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular5-data-table';
import { RecipeInfo } from '../../../model/recipe';
import { RecipeService } from '../../../service/recipe.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css'],
})
export class ListRecipeComponent implements OnInit, OnDestroy {
  
  tableResource: DataTableResource<RecipeInfo>
  recipes: RecipeInfo[];
  subscription: Subscription;
  items: RecipeInfo[]=[];
  itemCount: number;
  
  constructor(private recipeService: RecipeService) {
   this.subscription = this.recipeService.getListOfRecipe()
   .subscribe(recipes=>{
    this.recipes = recipes
    this.initializeTable(recipes);

    });
  }
  private initializeTable(recipes: RecipeInfo[]){
    this.tableResource = new DataTableResource(recipes);
    this.tableResource.query({offset:0 })
      .then(items=>this.items =items);
    this.tableResource.count()
      .then(count=>this.itemCount=count);
  }
  reloadItems(params){
    if(!this.tableResource) return;
    this.tableResource.query(params)
    .then(items=>this.items =items);
  }
 filter(query:string){
   let filteredRecipes = (query) ?
    this.recipes.filter(r=>r.name.toLowerCase().includes(query.toLowerCase()) 
    || r.components.toLowerCase().includes(query.toLowerCase()))
    :
    this.recipes;
    this.initializeTable(filteredRecipes);
 }
 ngOnDestroy(): void {
  this.subscription.unsubscribe();
   
 }
  ngOnInit() {
  }

}
