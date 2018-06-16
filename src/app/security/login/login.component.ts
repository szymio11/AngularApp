import { AppUserAuth } from '../../model/app-user-auth';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../model/app-user';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../../service/security.service';


@Component({
  selector: 'ptc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  loggedUser : any =[];

  invalidLogin: boolean=false;
  constructor(private securityService: SecurityService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }

   login() {
    this.securityService.login(this.user)
      .subscribe(resp => {
      this.securityObject = resp;
      console.log(resp);
        if (resp) {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        else
          this.invalidLogin=true;
      });
  }
  logout(){
    this.securityService.logout();
  }
  getLogged(){
    this.securityService.getUserLogged().subscribe((data: any
    )=>
    {
      this.loggedUser = data;
   console.log(this.loggedUser);
    });
}
}