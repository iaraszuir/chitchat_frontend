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


  async onChange($event: any) {


    if ($event.target.value === "reset") {
      const response = await this.userservice.getAll()
      this.arrUsers = response
    } else {

      const response = await this.userservice.getByLan($event.target.value, "h")
      console.log(response)
      this.arrUsers = response
    }




  }

  async onChangeW($event: any) {
    const response = await this.userservice.getByLan($event.target.value, "w")
    this.arrUsers = response
    console.log(response)

  }
}
