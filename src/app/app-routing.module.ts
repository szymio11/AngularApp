import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './security/login/login.component';
const routes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

