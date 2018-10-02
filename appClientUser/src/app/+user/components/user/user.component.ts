import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input() public user: IUser;

  @Output() public deleted: EventEmitter<IUser> = new EventEmitter<IUser>();
  @Output() public updated: EventEmitter<IUser> = new EventEmitter<IUser>();

  public deleteUser(user: IUser) {
    this.deleted.emit(user);
  }
  public updateUser(user: IUser) {
    this.updated.emit(user);
  }

}
