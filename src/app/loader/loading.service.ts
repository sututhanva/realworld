import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = new Subject<boolean>();

  start(){
    this.isLoading.next(true);
  }
  finish(){
    this.isLoading.next(false);
  }
}
