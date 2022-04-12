import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  arrUsers: any[]

  constructor(private userservice: UsersService) {
    this.arrUsers = []

  }

  async ngOnInit() {
    const response = await this.userservice.getAll()
    this.arrUsers = response
    console.log(response)
  }

}
