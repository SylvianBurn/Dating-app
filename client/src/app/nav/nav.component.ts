import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  username: string = '';

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    // var token = localStorage.getItem('token');

    // if (token)
    //   this.loggedIn = true;
  }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/members')
      },
      error: (err: any) => {
        console.log(err);
        this.toastr.error(err.error);
      }
    })
  }

  logout() {
    this.accountService.logout();
    // localStorage.removeItem("token");
    this.router.navigateByUrl('/');
  }
}
