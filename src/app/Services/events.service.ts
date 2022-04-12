import { HttpClient } from '@angular/common/http';
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
    console.log(formValue)
    /* return firstValueFrom(
      this.httpClient.post<any>(this.baseUrl, formValue)
    )
 */
  }

}





