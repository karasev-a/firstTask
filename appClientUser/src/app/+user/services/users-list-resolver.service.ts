import { Injectable } from '@angular/core';

import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs';

import { UserService } from './user.service';


@Injectable({
    providedIn: 'root',
})

export class UsersListResolverService implements Resolve<IUser[]> {

    constructor(private _userService: UserService, private _router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser[] | Observable<IUser[]> | Promise<IUser[]> {
        return this._userService.getUsers();
    }

}
