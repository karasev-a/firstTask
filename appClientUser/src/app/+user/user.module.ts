import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';


import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserRoutingModule } from './routes/user-routing.module';
import { UserEditComponent } from './components/user-edit/user.edit.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [UsersComponent],
  providers: [UserService],
})

export class UserModule { }
