import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user.edit.component.html',
  providers: [UserService]
})
export class UserEditComponent implements OnInit {
  @Input() user: IUser;
  id: number;
  userEditForm: FormGroup = new FormGroup({
    firstName: new FormControl(``),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private usersService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['userId'];
    if (this.id) {
      this.getUser();
    }
  }

  getUser() {
    this.usersService.getOneUser(this.id).subscribe(user => {
      this.user = user;
      this.userEditForm.setValue({
        'firstName': user.firstName,
        'lastName': user.lastName,
        'phone': user.phone,
        'address': user.address,
      });
    });
  }

  onSubmit() {
    let submitObservable: Observable<IUser>;
    if (this.id) {
      submitObservable = this.usersService.updateUser(this.id, this.userEditForm.value);
    } else {
      submitObservable = this.usersService.createUser(this.userEditForm.value);
    }

    submitObservable.subscribe(res => {
      this.user = res;
      this.location.back();
    });
  }
}
