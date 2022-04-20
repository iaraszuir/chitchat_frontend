import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {
  event: any;
  constructor(private activatedRoute: ActivatedRoute, private eventService: EventsService, private router: Router) {
    this.event = {};
  }


  ngOnInit() {

    this.activatedRoute.params.subscribe(async params => {
      const response = await this.eventService.getById(params['pEventId'])
      this.event = response[0];
      console.log(this.event)
    })
  }
  onClick() {
    this.activatedRoute.params.subscribe(async params => {
      const responseV2 = await this.eventService.addEventUser(params['pEventId'])
      const response = await this.eventService.getById(params['pEventId'])
      this.event = response[0];

    })

  }

}