
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private https: HttpClient) { }

  
   
  loadTicketCategory(){
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
			let options = { headers: headers, method: 'get' };
    return this.https.get('https://reqres.in/api/users').pipe(map(res => <any>res));
  }







}
