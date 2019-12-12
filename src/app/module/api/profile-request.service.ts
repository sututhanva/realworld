import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

export interface ProfileData{
  bio: string,
  following: boolean,
  image: string,
  username: string,
}

export interface Profile{
  profile: ProfileData
}

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  constructor(private requestService:RequestService) { }

  getProfile(username){
    return this.requestService.getRequest<Profile>(`/profiles/${username}`);
  }

  followUser(username){
    return this.requestService.postRequest(`/profiles/${username}/follow`,{});
  }
  unfollowUser(username){
    return this.requestService.deleteRequest(`/profiles/${username}/follow`);
  }
}
