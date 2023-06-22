import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  username: string = '';

  constructor(
    public accountService: AccountService
  ) {
    // var token = localStorage.getItem('token');

    // if (token)
    //   this.loggedIn = true;
  }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res: any) => {
        console.log(res);
        this.username = res.username;
        // localStorage.setItem('token', res.token);
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  logout() {
    this.accountService.logout();
    // localStorage.removeItem("token");
  }
}
