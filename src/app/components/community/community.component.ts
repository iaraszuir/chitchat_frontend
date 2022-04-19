import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  arrUsers: any[]
  arrFilter: any[]

  constructor(private userservice: UsersService) {
    this.arrUsers = []
    this.arrFilter = []

  }

  async ngOnInit() {
    const response = await this.userservice.getAll()
    this.arrUsers = response
    console.log(response)
  }


  async onChange($event: any) {
    const response = await this.userservice.getByLan($event.target.value, "h")
    this.arrUsers = response
    console.log(response)

  }

  async onChangeW($event: any) {
    const response = await this.userservice.getByLan($event.target.value, "w")
    this.arrUsers = response
    console.log(response)

  }
}
