import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) {}
  users:any;
  title = 'Dating app';

  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/users").subscribe({
      next: (users) => {
        this.users = users;
        console.log("users: ", users);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {console.log("request has completed")}
    });
  }
}
