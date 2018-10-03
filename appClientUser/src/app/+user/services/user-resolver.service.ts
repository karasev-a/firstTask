import { Injectable } from '@angular/core';

import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';

import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';



import { UserService } from './user.service';


@Injectable({
    providedIn: 'root',
})

export class UserResolverService implements Resolve<IUser> {

    constructor(private _userService: UserService, private _router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
        // throw new Error("Method not implemented.");
        let id = Number(route.paramMap.get('userId'));

        return this._userService.getOneUser(id).pipe(
            take(1),
            mergeMap(user => {
                if (user){
                    return of (user);
                } else {
                    this._router.navigate(['/users']);
                    return EMPTY;
                }
            })
        );
    }

}
