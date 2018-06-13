import { AppUserAuth } from './app-user-auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
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
  constructor(private http: HttpClient) { }
  
  logout(): void{
    this.resetSecurityObject();
  }
  
  resetSecurityObject(): void
  {
  this.securityObject.email="";
  this.securityObject.bearerToken="";
  this.securityObject.role="";
  localStorage.removeItem("bearerToken");
  }
  login(entity: AppUser): Observable<AppUserAuth>{
    this.resetSecurityObject();
    
    return this.http.post<AppUserAuth>("http://localhost:44304/api/user/login",
      entity,httpOptions).pipe(tap(
    resp=>{
      Object.assign(this.securityObject,resp)
     
      localStorage.setItem("bearerToken",
      this.securityObject.bearerToken);
    }
  ))
  }
 
}
