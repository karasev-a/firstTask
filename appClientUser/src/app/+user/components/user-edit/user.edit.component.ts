import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user.edit.component.html',
  providers: [UserService]
})
export class UserEditComponent {
  user: IUser;
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


  onSubmit() {
    this.usersService.createUser(this.userEditForm.value).subscribe(res => {
      this.user = res;
      this.location.back();
    });
  }
}
