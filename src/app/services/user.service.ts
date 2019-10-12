import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {GLOBAL} from './global';
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Injectable()
export class UserService {
  public url: string;

  // tslint:disable-next-line:variable-name
  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  register(user: User): Observable<any> {
    const params = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'register', params, {headers});
  }
  signup(user: User): Observable<any> {

  }
}

