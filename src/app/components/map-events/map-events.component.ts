import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-map-events',
  templateUrl: './map-events.component.html',
  styleUrls: ['./map-events.component.css']
})
export class MapEventsComponent implements OnInit {

  events: any[];
  lat: number;
  lng: number;

  constructor(private eventsService: EventsService) {
    this.events = [];
    this.lat = 0;
    this.lng = 0;
  }

  async ngOnInit() {

    const result = await this.eventsService.getLocations()
    this.events = result;


  }

}
