import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

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
  providedIn: 'root'
})
export class UserRequestService {

constructor(private requestService:RequestService) {

}

getUser(){
  return this.requestService.getRequest<User>('/user');
}

updateUser(email,password,username,image,bio){
  return this.requestService.putRequest('/user',{
    'user': {
      'username': username,
      'image': image,
      'bio': bio,
      'email': email,
      'password': password
    }
  })
}



}
