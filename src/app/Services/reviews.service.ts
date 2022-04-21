import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  baseUrl: string;

  constructor(private httpclient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/reviews'
  }

  createReview(formValue: any) {


    const httpOptions = {
      headers: new HttpHeaders({
        "authentication": localStorage.getItem('token')
      })

    }

    return firstValueFrom(
      this.httpclient.post<any>(this.baseUrl + '/new', formValue, httpOptions)
    )
  }


}
