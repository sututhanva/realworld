import { Injectable } from '@angular/core';
import { RequestService } from '../api/request.service';

@Injectable()
export class AuthenticationService {

  constructor(private requestService:RequestService) { }

  loginUser(email,password){
    return this.requestService.postRequest('/users/login', {
      'user': {
        'email': email,
        'password': password
      }
    });
  }
  
  registerUser(email,password,username){
    return this.requestService.postRequest('/users',{
      'user': {
        'username': username,
        'email': email,
        'password': password
      }
    });
  }
}
