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

export class UserResolverService implements Resolve<IUser> {

    constructor(private _userService: UserService, private _router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
        const id = +route.params['userId'];
        return this._userService.getOneUser(id);
    }

}
