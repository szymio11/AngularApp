import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public securityService: SecurityService) { }

  ngOnInit() {
  }
  logout(): void {
    this.securityService.logout();
  }
  isLogged():boolean{
    return this.securityService.isLogged();
  }
  isAdmin():boolean{
    let admin = this.securityService.currentUser.typ;
    if(admin==null)
    return false;
    if(admin=="admin")
    {
      return true;
    }
    else{
      return false;
    }
    
 }
}
