import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/events';

  }

  createEvent(formValue: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        "authentication": localStorage.getItem('token')
      })

    }

    return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl + "/new", formValue, httpOptions)

    )

  }

  getAll() {

    const httpOptions = {
      headers: new HttpHeaders({
        "authentication": localStorage.getItem('token')
      })

    }

    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl, httpOptions)
    )
  }

  getById(pEventId: number) {

    const httpOptions = {
      headers: new HttpHeaders({
        "authentication": localStorage.getItem('token')
      })

    }
    return firstValueFrom(
      this.httpClient.get<any>(this.baseUrl + '/' + pEventId, httpOptions)
    )
  }
}