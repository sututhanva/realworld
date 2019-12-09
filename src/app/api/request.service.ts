import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { DataSharedService } from './data-shared.service';
import { Observable } from 'rxjs';

export interface httpOption {
  nameOption: string,
  valueOption: string
}
@Injectable({
  providedIn:"root"
})

export class RequestService {
  private readonly _baseApi: string = 'https://conduit.productionready.io/api';
  private _httpOptions = {
    headers: new HttpHeaders(),
    params: new HttpParams()
  }

  constructor(private http:HttpClient,private dataService:DataSharedService) {
    dataService.getSyncToken().subscribe((token)=>{
      if(token){
        this._httpOptions = this._setHttpOption([{nameOption:'Authorization',valueOption:'Token '+localStorage.getItem('jwtToken')}]);
      }
    })
  }

  getRequest<T>(url,headers?:httpOption[],params?:httpOption[]):Observable<T>{
    let httpOptions = this._setHttpOption(headers,params);
    return this.http.get<T>(this._baseApi+url,httpOptions);
  }

  deleteRequest<T>(url,headers?:httpOption[],params?:httpOption[]):Observable<T>{
    let httpOptions = this._setHttpOption(headers,params);
    return this.http.delete<T>(this._baseApi+url,httpOptions)
  }

  postRequest<T>(url,body,headers?:httpOption[],params?:httpOption[]):Observable<T>{
    let httpOptions = this._setHttpOption(headers,params);
    return this.http.post<T>(this._baseApi+url,body,httpOptions)
  }

  putRequest<T>(url,body,headers?:httpOption[],params?:httpOption[]):Observable<T>{
    let httpOptions = this._setHttpOption(headers,params);
    return this.http.put<T>(this._baseApi+url,body,httpOptions)
  }

  private _setHttpOption(headers?:httpOption[],params?:httpOption[]){
    let httpOption = this._httpOptions;
    httpOption.params = new HttpParams();
    if(headers){
      headers.forEach((header)=>{
        httpOption.headers = httpOption.headers.set(header.nameOption,header.valueOption);
      })
    }
    if(params){
      params.forEach((param)=>{
        httpOption.params = httpOption.params.set(param.nameOption,param.valueOption);
      })
    }

    return httpOption;
  }

}
