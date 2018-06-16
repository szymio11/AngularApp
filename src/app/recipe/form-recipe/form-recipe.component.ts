import { RecipeService } from './../service/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.css']
})
export class FormRecipeComponent implements OnInit {
  constructor(private recipeService: RecipeService,
    private router: Router
  ) { }
  form = new FormGroup({
    name: new FormControl('',[
      Validators.required,Validators.maxLength(50)
    ]),
    components: new FormControl('',
      Validators.required
    ),
    preparationTimeInMinutes: new FormControl('',Validators.required),
    difficulty: new FormControl('',Validators.required)

  });
  ngOnInit() {
  }
  get name(){
    return this.form.get('name');
  }

createRecipe(){
  let isValid = this.recipeService.createRecipe(this.form.value).subscribe(resp => {   
    });;
    console.log(this.form.value)
  if(!isValid){
  this.form.setErrors({
    invalidLogin: true
  })
}
}
}
