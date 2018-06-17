import { SecurityService } from './service/security.service';
import { AuthGuard } from './security/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpInterceptorModule } from './security/http-interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { NavComponent } from './nav/nav.component';
import { AdminGuard } from './security/admin-guard';
import { RegisterComponent } from './security/register/register.component';
import { AppConfig } from './app.config';
import { StarComponent } from './shared/star.component';
import { RecipeService } from './service/recipe.service';
import { DataTableModule } from 'angular5-data-table';
import { FormRecipeComponent } from './recipe/admin/form-recipe/form-recipe.component';
import { ListRecipeComponent } from './recipe/admin/list-recipe/list-recipe.component';
import { RecipeComponent } from './recipe/user/recipe/recipe.component';
import { FormRatingComponent } from './rating/form-rating/form-rating.component';


@NgModule({

  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpInterceptorModule, 
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule.forRoot()
  ], 
   declarations: [
    AppComponent,
    LoginComponent,
    FormRecipeComponent,
    NavComponent,
    RegisterComponent,
    ListRecipeComponent,
    StarComponent,
    RecipeComponent,
    FormRatingComponent
    
   
  ],
  providers: [
    SecurityService,
    RecipeService,
    AuthGuard,
    AdminGuard,
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
