import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../components/users/users.component';
import { UserComponent } from '../components/user/user.component';
import { UserEditComponent } from '../components/user-edit/user.edit.component';
import { UserResolverService } from '../services/user-resolver.service';

const userRouter: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/new_user', component: UserEditComponent },
  {
    path: 'users/:userId', component: UserEditComponent,
    resolve: {
      user: UserResolverService
    }
  },
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

