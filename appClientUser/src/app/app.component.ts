import { Component, OnInit } from '@angular/core';
import { UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  title = 'appClientUser';
  description = 'This is app for getting users from server!!!!!!!!!!!';
  users: IUser[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => this.users = data);
  }
}