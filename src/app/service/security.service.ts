import { AppConfig } from './../app.config';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AppUserAuth } from '../model/app-user-auth';
import { AppLoggedUser } from '../model/logged-user';
import { AppUser } from '../model/app-user';
import { AppUserRegister } from '../model/register';



const httpOptions ={
  headers: new HttpHeaders({
   'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SecurityService {
 securityObject: AppUserAuth = new AppUserAuth();
 loggedUser: AppLoggedUser = new AppLoggedUser();
  constructor(private http: HttpClient, private config: AppConfig) { }

  logout(): void{
    this.resetSecurityObject();

  }
  isLogged(){
    let jwt = new JwtHelperService();
    let token = localStorage.getItem("bearerToken");
    if(!token)
      return false;
    let isTokenExired = jwt.isTokenExpired(token);
    return !isTokenExired;
  }
  
  resetSecurityObject(): void
  {
  localStorage.removeItem("bearerToken");
  }
  login(entity: AppUser){
    this.resetSecurityObject();
    
    return this.http.post<AppUserAuth>(this.config.apiUrl+"user/login",
      entity,httpOptions)
      .pipe(tap(
      resp=>{
      Object.assign(this.securityObject,resp)
      var token = this.securityObject.token;
      if(resp && token){
        localStorage.setItem("bearerToken",
             token);
        return true;
      }
      else{
        return false;
      }
    }
  ))
}
register(entity: AppUserRegister){
return this.http.post(this.config.apiUrl+"user/register", entity,httpOptions)
.pipe(tap(
resp=>{
  if(resp){
    return true;
  }
  else{
    return false;
  }
  }

))
}

getUserLogged() {
  return this.http.get<AppLoggedUser>(this.config.apiUrl+"user");
}
get currentUser(){
  let token = localStorage.getItem("bearerToken");
  if(!token)
    return null;
      
  return new JwtHelperService().decodeToken(token);
}
}