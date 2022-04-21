import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from 'src/app/Services/events.service';

@Component({
  selector: 'app-mapang',
  templateUrl: './mapang.component.html',
  styleUrls: ['./mapang.component.css']
})
export class MapangComponent implements OnInit {

  @Input() lat: number;
  @Input() lng: number;

  constructor() {
    this.lat = 0;
    this.lng = 0;


  }

  ngOnInit() {
  }



}
