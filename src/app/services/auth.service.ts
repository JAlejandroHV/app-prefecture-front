import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base:string;
  constructor(private http: HttpClient) { 

    this.base= environment.base;
  }

  getUsers():Observable<any>{
    console.log("enter to service")
    return this.http.get(`${this.base}/users`);
  }
}
