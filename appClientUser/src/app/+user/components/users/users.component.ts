import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  public users: IUser[] = [];

  @Output() public user: IUser;

  constructor(
    private _usersService: UserService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  // private _getAllUsers() {
  //   this._usersService.getUsers().subscribe(data => this.users = data);
  // }

  public ngOnInit() {
   // this._getAllUsers();
    this.users = this._route.snapshot.data['users'];
  }

  public deleteUser(user: IUser) {
    // this._usersService.deleteOneUser(user.id).subscribe(() => this._getAllUsers());

    this._usersService.deleteOneUser(user.id).subscribe(() => {
      this.users = this._route.snapshot.data['users'];
    } );
  }

  public goToUpdateUser(user) {
    this._router.navigate(['/users', user.id]);
  }
}
