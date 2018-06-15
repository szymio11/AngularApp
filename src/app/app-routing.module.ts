import { AdminGuard } from './security/admin-guard';
import { RecipeComponent } from './recipe/recipe.component';
import { AuthGuard } from './security/auth.guard';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './security/login/login.component';
import { FormRecipeComponent } from './recipe/form-recipe/form-recipe.component';
const routes: Routes = [
  { 
    path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'recipe/new', component: FormRecipeComponent, canActivate: [AuthGuard,AdminGuard]
   },
    {
     path: 'recipe', component: RecipeComponent
 //   canActivate:[AuthGuard],
   // data: {role: "admin"}
   }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

