import { AuthGuard } from './security/auth.guard';
import { RecipeService } from './recipe/service/recipe.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpInterceptorModule } from './security/http-interceptor';
import { RecipeComponent } from './recipe/recipe.component';
import { FormRecipeComponent } from './recipe/form-recipe/form-recipe.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { NavComponent } from './nav/nav.component';
import { AdminGuard } from './security/admin-guard';
import { RegisterComponent } from './security/register/register.component';
import { AppConfig } from './app.config';
import { ListRecipeComponent } from './recipe/list-recipe/list-recipe.component';
import { StarComponent } from './shared/star.component';

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
    ReactiveFormsModule   
  ], 
   declarations: [
    AppComponent,
    LoginComponent,
    RecipeComponent,
    FormRecipeComponent,
    NavComponent,
    RegisterComponent,
    ListRecipeComponent,
    StarComponent
    
   
  ],
  providers: [
    RecipeService,
    AuthGuard,
    AdminGuard,
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
