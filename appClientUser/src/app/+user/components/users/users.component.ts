import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { queryRefresh } from '@angular/core/src/render3/query';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];

  @Output()
  user: IUser;

  constructor(
    private usersService: UserService,
    private router: Router,
  ) { }

  getAllUsers() {
    this.usersService.getUsers().subscribe(data => this.users = data);
  }

  ngOnInit() {
    this.getAllUsers();

    // this.usersService.getOneUser().subscribe(data => this.oneUser = data);
  }

  deleteUser(user: IUser) {
    this.usersService.deleteOneUser(user.id).subscribe((result) => this.getAllUsers());
   // this.usersService.getUsers().subscribe(data => this.users = data);
  }

  goToPageOfUser(user: IUser) {
    this.user = user;
    this.router.navigate(['/users', user.id]
   );
  }

}
