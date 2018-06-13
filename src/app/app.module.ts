import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({

  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
   
  ], 
   declarations: [
    AppComponent,
    LoginComponent,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
