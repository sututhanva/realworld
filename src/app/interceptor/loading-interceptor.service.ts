import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'
import { LoadingService } from '../loader/loading.service';

@Injectable()
export class LoadingInterceptorService implements HttpInterceptor{
  
  constructor(private loadingService:LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.show();
    return next.handle(req).pipe(
      finalize(()=> this.loadingService.hide())
    )
  }

}
