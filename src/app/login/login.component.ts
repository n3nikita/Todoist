import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalid: boolean = false;

  constructor(private auth: AuthService,
              private router: Router) { }

  login(username: string, password: string) {
    let user = { username, password } as User;
    this.auth.login(user).subscribe(
      () => this.router.navigateByUrl('/'),
      err => {
          if(err.status === 401){
            this.invalid = true;
          }
      }
    );
  }

  onChange(data){
    this.invalid = false;
  }
}
