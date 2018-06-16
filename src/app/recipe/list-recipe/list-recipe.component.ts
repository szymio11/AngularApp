import { RecipeService } from './../service/recipe.service';
import { Component, OnInit } from '@angular/core';
import { NeutronRatingModule } from 'neutron-star-rating';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css'],
})
export class ListRecipeComponent implements OnInit {
filter: any={}
  recipes$;
  constructor(private recipeService: RecipeService) {
   this.recipes$ = this.recipeService.getListOfRecipe();
   }
 
  ngOnInit() {
  }

}
