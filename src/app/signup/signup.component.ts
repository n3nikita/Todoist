import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  exist: boolean = true;

  constructor(private authService: AuthService,
              private router: Router) { }


  signup(username: string, password: string){
    let user = {username, password} as User;
    this.authService.signUp(user)
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
