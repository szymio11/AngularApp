import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private securityService: SecurityService,private router: Router ){}
  canActivate(route,state: RouterStateSnapshot )
    {
    if (this.securityService.isLogged())
      return true;

    this.router.navigate(['/login'],{queryParams: {returnUrl: state.url}});
      return false;
  }
}
