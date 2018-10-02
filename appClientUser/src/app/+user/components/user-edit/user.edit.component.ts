import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user.edit.component.html',
})
export class UserEditComponent implements OnInit {
  @Input() public user: IUser;
  private _id: number;
  private _routeSubscription: Subscription;
  userEditForm: FormGroup = new FormGroup({
    firstName: new FormControl(``),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    private _route: ActivatedRoute,
    private _usersService: UserService,
    private _location: Location
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => this._id = params['userId']);
    if (this._id) {
      this.getUser();
    }
  }

  private getUser() {
    this._usersService.getOneUser(this._id).subscribe(user => {
      this.user = user;
      this.userEditForm.patchValue(user);
    });
  }

  onSubmit() {
    let submitObservable: Observable<IUser>;
    submitObservable = this._id
      ? this._usersService.updateUser(this._id, this.userEditForm.value)
      : this._usersService.createUser(this.userEditForm.value);

    submitObservable.subscribe(res => {
      this.user = res;
      this._location.back();
    });
  }
}
