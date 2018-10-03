import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable()
export class UserService {

  private _serverUrl: string;

  constructor(private http: HttpClient) {
    this._serverUrl = environment.serverApiUrl;
  }

  public getUsers(): Observable<IUser[]> {

    return this.http.get<IUser[]>(`${this._serverUrl}users`);
  }

  public deleteOneUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this._serverUrl}users/${id}`);
  }

  public getOneUser(id: number): Observable<IUser> {

    return this.http.get<IUser>(`${this._serverUrl}users/${id}`);
  }

  public updateUser(id: number, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this._serverUrl}users/${id}`, user);
  }

  public createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this._serverUrl}users/`, user);
  }

}
