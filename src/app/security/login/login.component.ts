import { SecurityService } from './../security.service';
import { AppUserAuth } from './../app-user-auth';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppUser } from '../app-user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ptc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  returnUrl: string;

  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

   login() {
     console.log(this.user)
    this.securityService.login(this.user)
      .subscribe(resp => {
      this.securityObject = resp;
        if (this.returnUrl) {
          this.router.navigateByUrl(this.returnUrl);
        }
        console.log(resp)
      });
  }
  logout(){
    this.securityService.logout();
  }


}
