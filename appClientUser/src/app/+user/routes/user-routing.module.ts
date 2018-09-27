import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../components/users/users.component';
import { UserComponent } from '../components/user/user.component';

const userRouter: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'users/:userId', component: UserComponent }
];

@NgModule({
    imports: [
      RouterModule.forChild(userRouter)
    ],
    exports: [
      RouterModule
    ]
  })
  export class UserRoutingModule { }

