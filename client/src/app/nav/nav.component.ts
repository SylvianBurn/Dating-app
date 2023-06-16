import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  model: any = {};
  loggedIn = false;

  constructor(
    private accountService: AccountService
  ) {
    var token = localStorage.getItem('token');

    if (token)
      this.loggedIn = true;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res: any) => {
        console.log(res);
        this.loggedIn = true;
        localStorage.setItem('token', res.token);
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem("token");
  }
}
