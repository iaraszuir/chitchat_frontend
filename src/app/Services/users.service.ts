import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string

  constructor(private HttpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users/'


  }

  // getAll() {
  //   return firstValueFrom(
  //     this.HttpClient.get<any[]>(''));
  // }


  loginUser(login: any): any {

    return firstValueFrom(
      this.HttpClient.post(this.baseUrl + "login", login));

  }

  createUser(formValue: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })

    }

    return firstValueFrom(
      this.HttpClient.post(this.baseUrl + "register", formValue, httpOptions));
  }

}
