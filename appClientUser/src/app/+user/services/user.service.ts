import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable()
export class UserService {

  private _serverUrl: string;

  constructor(private http: HttpClient) {
    this._serverUrl = this.getServerUrl();
  }

  private getServerUrl(): string {
    return environment.protocolServer + environment.hostServer +  environment.versionServer;
  }

  getUsers(): Observable<IUser[]> {

    return this.http.get<IUser[]>(`${this._serverUrl}users`);
  }

  deleteOneUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this._serverUrl}users/${id}`);
  }

  getOneUser(id: number): Observable<IUser> {

    return this.http.get<IUser>(`${this._serverUrl}users/${id}`);
  }

  updateUser(id: number, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this._serverUrl}users/${id}`, user);
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this._serverUrl}users/`, user);
  }

}
