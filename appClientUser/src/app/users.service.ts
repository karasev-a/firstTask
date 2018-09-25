import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UsersService{
  private users: string[] = [];

  constructor(private http: HttpClient){};

  getUsers(): Observable<any>{
    // let resultOfReq: string[] = ['Tom', 'Sam', 'Kat'];

    // this.users = resultOfReq;

    return this.http.get('http://localhost:8080/api/v1/users');
  }
}