import { AppLoggedUser } from './logged-user';
import { AppUserAuth } from './app-user-auth';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {tap, map} from 'rxjs/operators';
import { AppUser } from './app-user';

const API_URL = "http://localhost:44304/api/user/";
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
  constructor(private http: HttpClient) { }

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
    return this.http.post<AppUserAuth>(API_URL+"login",
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

getUserLogged() {
  return this.http.get<AppLoggedUser>(API_URL);
}
get currentUser(){
  let token = localStorage.getItem("bearerToken");
  if(!token)
    return null;
      
  return new JwtHelperService().decodeToken(token);
}
}