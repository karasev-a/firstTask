import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user.edit.component.html',
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
})
export class UserEditComponent implements OnInit, OnDestroy {
  @Input() public user: IUser;
  private _id: number;
  private _routeSubscription: Subscription;
  public userEditForm: FormGroup = new FormGroup({
    firstName: new FormControl(``, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    private _route: ActivatedRoute,
    private _usersService: UserService,
    private _location: Location
  ) { }

  public ngOnInit() {
    this._routeSubscription = this._route.params.subscribe(params => {
      this._id = params['userId'];
      if (this._id) {
          this.userEditForm.patchValue(this._route.snapshot.data['user']);
      }
    });
  }

  public ngOnDestroy() {
    if (this._routeSubscription) {
      this._routeSubscription.unsubscribe();
    }
  }

  public onSubmit() {
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
