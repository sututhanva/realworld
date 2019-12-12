import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';

export interface Tags{
  "tags": String[]
}

@Injectable({
  providedIn: 'root'
})
export class TagRequestService {

  constructor(private requestService:RequestService) { }

  getTags(){
    return this.requestService.getRequest<Tags>('/tags');
  }
}
