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
  }

  deleteUser(user: IUser) {
    this.usersService.deleteOneUser(user.id).subscribe((result) => this.getAllUsers());
  }

  goToPageOfUser(user: IUser) {
    this.user = user;
    this.router.navigate(['/users', user.id]
   );
  }

  goToPageOfCreate() {
    this.router.navigate(['/users/new_user']);
  }

}
