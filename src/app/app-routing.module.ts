import { ListRecipeComponent } from './recipe/list-recipe/list-recipe.component';
import { AdminGuard } from './security/admin-guard';
import { RecipeComponent } from './recipe/recipe.component';
import { AuthGuard } from './security/auth.guard';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { FormRecipeComponent } from './recipe/form-recipe/form-recipe.component';
import { RegisterComponent } from './security/register/register.component';
const routes: Routes = [
  { 
    path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin/recipe/new', component: FormRecipeComponent, canActivate: [AuthGuard,AdminGuard]
   },
   { 
    path: 'admin/recipe', component: ListRecipeComponent, canActivate: [AuthGuard,AdminGuard]
   },
    //{
    // path: 'recipe', component: RecipeComponent
   //},
   {
    path: 'register', component: RegisterComponent
  }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

