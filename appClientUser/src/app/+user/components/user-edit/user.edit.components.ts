// import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { FormGroup, FormControl, Validators} from '@angular/forms';

// import { Location } from '@angular/common';
// import { UserService } from '../../services/user.service';

// @Component({
//   selector: 'app-user-edit',
//   templateUrl: './user.edit.form.components.html',
//   providers: [UserService]
// })
// export class UserEditComponent implements OnInit  {

//   @Input() user: IUser;

//   constructor(
//     private route: ActivatedRoute,
//     private usersService: UserService,
//     private location: Location
//   ) { }


//   ngOnInit() {
//     //this.getUser();
//   }

//   getUser() {
//     const id = +this.route.snapshot.paramMap.get('userId');
//     this.usersService.getOneUser(id).subscribe(user => this.user = user);
//   }

//   onSubmit() {

//   };


// }
