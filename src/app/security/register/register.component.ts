import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { SecurityService } from '../../service/security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form = new FormGroup({
  name: new FormControl('',[
    Validators.required,Validators.maxLength(50)
  ]),
  email: new FormControl('',[
    Validators.email,Validators.required
  ]),
  password: new FormControl('',Validators.required)
});
  constructor(private securityService: SecurityService) { }

  ngOnInit() {
  }
get name(){
  return this.form.get('name');
}
get email(){
  return this.form.get('email');
}
get password(){
  return this.form.get('password');
}
register(){
  let isValid = this.securityService.register(this.form.value).subscribe(resp => {   
    });;
  if(!isValid){
  this.form.setErrors({
    invalidLogin: true
  })
}
}
}
