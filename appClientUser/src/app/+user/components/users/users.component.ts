import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


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
    private route: ActivatedRoute,
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

  goToUpdateUser(user) {
    const id = +this.route.snapshot.paramMap.get('userId');
      this.router.navigate(['/users', user.id]);
  }
}
