import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  event: any;
  constructor(private userservice: UsersService) {

    this.user = {};
    this.event = {};
  }

  async ngOnInit() {

    const response = await this.userservice.profileUser()
    this.user = response[0]
    console.log(this.user)


    const responseE = await this.userservice.eventsProfile()
    this.event = responseE
    console.log(this.event)

  }






}
