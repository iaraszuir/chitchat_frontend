import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private HttpClient: HttpClient) {


  }

  // getAll() {
  //   return firstValueFrom(
  //     this.HttpClient.get<any[]>(''));
  // }

  loginUser(login: any) {
    console.log(login)

  }

  createUser(formValue: any) {
    console.log(formValue)
    // return firstValueFrom(
    //   this.HttpClient.post<any>(''));
  }

}
