import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SecurityService } from '../service/security.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router,
  private securityService: SecurityService
  ) { }
  canActivate(){
    let admin = this.securityService.currentUser.typ;
    if(admin==null)
    return false;
    if(admin=="admin")
      return true;
    
    this.router.navigate(['/']);
    return false;
    
  }
}
