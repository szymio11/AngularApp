import { RecipeService } from './../../../service/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeInfo } from '../../../model/recipe';


@Component({
  selector: 'app-byid-recipe',
  templateUrl: './byid-recipe.component.html',
  styleUrls: ['./byid-recipe.component.css']
})
export class ByidRecipeComponent implements OnInit {
  id;
  recipe:RecipeInfo=new RecipeInfo;
  constructor(private recipeService: RecipeService,private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(this.id).subscribe(resp=>this.recipe=resp);
   }
  
  ngOnInit() {
  }

}
