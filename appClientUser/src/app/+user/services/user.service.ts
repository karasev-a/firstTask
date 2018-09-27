import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {

    return this.http.get('http://localhost:8080/api/v1/users');
  }

  deleteOneUser(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/v1/users/${id}`);
  }

  getOneUser(id: number): Observable<any> {

    return this.http.get('http://localhost:8080/api/v1/users/id');
  }

  updateUser(id: number, user: IUser): Observable<any> {
    return this.http.put(`http://localhost:8080/api/v1/users/${id}`, user);
  }

  createUser(user: IUser): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/users/', user);
  }
}
