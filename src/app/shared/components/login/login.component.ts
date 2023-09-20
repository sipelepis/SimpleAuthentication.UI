import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserLogInModel } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  @Output() UserLogInUpdated = new EventEmitter<UserLogInModel[]>();
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private routerService: Router) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  checkEmail(){    
    if (this.contactForm.get('email')?.hasError('required')){
    return 'You must enter a value';
    }
    return this.contactForm.get('password')?.hasError('email') ? 'Not a valid email' : '';
  }
  checkPassword(){
    return "Password is required!"
  }
  loginEmployee(){
    this.authService
    .postEmployee(this.contactForm.value)
    .subscribe((res: any[]) =>{
      this.UserLogInUpdated.emit(this.contactForm.value)
      if(res){
        console.log(res)
        const resJSON = JSON.parse(JSON.stringify(res))
        localStorage.setItem("token", resJSON.authentication.sessionToken);
        this.authService.setUserData(resJSON);
        this.routerService.navigate([`${resJSON._id}`]);
      }
      },(error) =>{
        console.error(error);
      }
    );
  }
}
