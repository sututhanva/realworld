import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user-request.service';

@Injectable({
  providedIn:"root"
})
export class DataSharedService {
  
  private readonly _user = new BehaviorSubject<User>(undefined);
  private readonly _token = new BehaviorSubject<String>('');

  constructor() {
    
  }

  updateSyncUser(user:User){
    this._user.next(user);
  }

  getSyncUser(){
    return this._user;
  }

  updateSyncToken(){
    this._token.next(localStorage.getItem('jwtToken'));
  }

  getSyncToken(){
    return this._token;
  }

  clearToken(){
    localStorage.clear();
    this._token.next(undefined);
  }
}
