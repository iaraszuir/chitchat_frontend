import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  arrUsers: any[]

  constructor(private usersService: UsersService) {
    this.arrUsers = []

  }

  async ngOnInit() {

    // this.arrUsers = await this.usersService.getAll();

  }



}
