import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  formEvent: FormGroup;
  constructor(private eventsService: EventsService) {
    this.formEvent = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('',),
      address: new FormControl('', Validators.required)
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    const response = this.eventsService.createEvent(this.formEvent.value);

  }
}
