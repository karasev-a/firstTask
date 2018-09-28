import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserService]
})
export class UserComponent implements OnInit  {
  user: IUser;
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('name'),
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
    this.getUser();
  }

  getUser() {
    const id = +this.route.snapshot.paramMap.get('userId');
    this.usersService.getOneUser(id).subscribe(user => this.user = user);
  }

  updateUser() {

  }


}
