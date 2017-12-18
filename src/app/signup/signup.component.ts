import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';
import {Registeruser} from '../registeruser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  exist: boolean = true;

  constructor(private authService: AuthService,
              private router: Router) { }


  signup(name: string, email: string, username: string, password: string){
    let RegUser = { name, email, username, password } as Registeruser;
    this.authService.signUp(RegUser)
      .subscribe(
        () => {
          this.router.navigateByUrl('/dashboard');
        },
        err => this.exist = false
      );
  }

  onUsernameChange(data){
    this.exist = true;
  }

}
