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

  // revisar la ruta de este getAll
  getAll() {
    return firstValueFrom(
      this.HttpClient.get<any[]>(this.baseUrl));
  }

  getByLan(pLanId, pType) {

    return firstValueFrom(this.HttpClient.get<any[]>(this.baseUrl + `/lan/${pLanId}/type/${pType}`))


  }

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
    console.log(formValue)
    return firstValueFrom(
      this.HttpClient.post(this.baseUrl + "register", formValue, httpOptions));
  }




}
