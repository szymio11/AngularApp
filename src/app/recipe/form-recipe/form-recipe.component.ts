
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { RecipeUpdate } from '../../model/recipe';
import { RecipeService } from '../../service/recipe.service';
@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.css']
})
export class FormRecipeComponent implements OnInit {
  recipe ={};
  id;
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.recipeService.getRecipeUpdate(this.id).pipe(take(1)).subscribe(r=>this.recipe = r)
  }
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

saveRecipe(recipe){

  if(this.id) this.recipeService.updateRecipe(this.id,recipe).subscribe(resp=>{
    console.log(resp);
  });
  else{
  let isValid = this.recipeService.createRecipe(this.form.value).subscribe(resp => {   
    });;
    console.log(this.form.value)
  if(!isValid){
  this.form.setErrors({
    invalidLogin: true
  })
}
}
this.router.navigate(['/admin/recipe'])
}
delete(){
  if(!confirm('Jesteś pewny, że chcesz usunąć ten przepis?'))return;

  this.recipeService.delete(this.id).subscribe();
  this.router.navigate(['/admin/recipe']);
}
}
