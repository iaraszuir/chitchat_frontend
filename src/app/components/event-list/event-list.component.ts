import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  arrEvents: any[];
  constructor(private eventsService: EventsService) {
    this.arrEvents = []

  }

  async ngOnInit() {
    const response = await this.eventsService.getAll();
    this.arrEvents = response;
  }

  async onChange($event: any) {
    if ($event.target.value === 'all') {
      const response = await this.eventsService.getAll();
      this.arrEvents = response;
    }
    else {

      const response = await this.eventsService.getByLan($event.target.value)
      this.arrEvents = response;

    }

  }

}
