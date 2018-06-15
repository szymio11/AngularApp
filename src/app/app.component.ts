import { AppLoggedUser } from './security/logged-user';
import { AppUserAuth } from './security/app-user-auth';
import { Component, OnInit } from '@angular/core';
import { SecurityService } from './security/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  securityObject: AppUserAuth = null;
  loggedUser: AppLoggedUser = null;
  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }
getLogged(){
  this.securityService.getUserLogged().subscribe((data: AppLoggedUser)=>
  {
    this.loggedUser = data;
    this.loggedUser.isAuthenticated=true;
  });
}
ngOnInit() {
  this.getLogged();
}
 

}
