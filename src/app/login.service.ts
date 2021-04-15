import { Injectable } from '@angular/core';
import{ HttpClient }  from '@angular/common/http';
import {Observable}   from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }
  authenticate(obj:any):Observable<any>{
    return this.http.post("https://reqres.in/api/login",obj);
  };

  register(obj:any):Observable<any>{
    return this.http.post("https://reqres.in/api/register",obj);
  };

  



  

}
