import { SecurityService } from './../security/security.service';
import { Component, OnInit } from '@angular/core';
import { AppLoggedUser } from '../security/logged-user';
import { AppRecipe } from './recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  loggedUser: AppLoggedUser = null;
  constructor(private securityService: SecurityService) { }
 recipe: AppRecipe = null;
 
  AddRecipe(){
    
  }
  ngOnInit() {
    this.getLogged();
  }
  getLogged(){
    this.securityService.getUserLogged().subscribe((data: any
    )=>
    {
      this.loggedUser = data;
   console.log(this.loggedUser);
    });
}
}
