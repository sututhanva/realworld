import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

export interface UserData{
  "email": string,
  "password": string,
  "bio"?: string,
  "image"?: string,
  "username"?: string
}

export interface User {
  "user": UserData
}

@Injectable({
  providedIn:"root"
})
export class DataSharedService {
  private user:User;
  private readonly _user = new BehaviorSubject<User>(this.user);
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

  getUser(){
    return this.user;
  }

  setUser(user:User){
    this.user=user;
  }

  clearToken(){
    localStorage.clear();
    this._token.next(undefined);
  }

  // checkUser(username){
  //   this._user.subscribe((user: User)=>{
  //     if(username == user.user.username){
  //        true;
  //     }
  //      false;
  //   })
  // }
}
