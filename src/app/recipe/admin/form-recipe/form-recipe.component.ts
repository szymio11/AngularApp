
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { AddRecipe } from '../../add-recipe';
import { RecipeService } from '../../../service/recipe.service';
import { RecipeUpdate } from '../../../model/recipe';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.css']
})
export class FormRecipeComponent implements OnInit {
  recipe ={};
  recipeObject: AddRecipe = new AddRecipe();
  
 
  id;
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
     this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.recipeService.getRecipeUpdate(this.id).pipe(take(1)).subscribe(resp=> this.fillUpform(resp))
    }}
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
    console.log(this.recipeObject) 
  }
  get name(){
    return this.form.get('name');
  }
fillUpform(entity: RecipeUpdate){
  this.form.get('name').setValue(entity.name);
  this.form.get('components').setValue(entity.components);
  this.form.get('preparationTimeInMinutes').setValue(entity.preparationTimeInMinutes);
  this.form.get('difficulty').setValue(entity.difficulty);
}
saveRecipe(){

  if(this.id) this.recipeService.updateRecipe(this.id,this.form.value).subscribe(resp=>{
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
