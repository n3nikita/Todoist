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

  constructor(private authSerice: AuthService,
              private router: Router) { }


  signup(username: string, password: string){
    let user: User = {username, password} as User;
    this.authSerice.signUp(user)
      .subscribe(
        () => this.router.navigateByUrl('/'),
        err => this.exist = false
      );
  }

  onUsernameChange(data){
    this.exist = true;
  }

}
