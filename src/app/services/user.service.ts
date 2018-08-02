import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  // private _testUrl: string = "https://jsonplaceholder.typicode.com/todos";
  
  private _url: string = "http://localhost:8080/api";

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

  // Demo App API
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._url+"/rest/users")
      .catch(this.errorHandler);
  }

  getUserById(id): Observable<User[]> {
    return this.http.get<User[]>(this._url+"/rest/users/"+id)
      .catch(this.errorHandler);
  }

  createUser(userData): Observable<User[]> {
    return this.http.post<any>(this._url+"/user", userData);
  }

  updateUser(userData, id): Observable<User[]> {
    return this.http.put<any>(this._url+"/rest/users"+id, userData);
  }

}

export interface User {
  id: number,
  fullName: string,
  username: string,
  password: string,
  role: string,
  status: number
}