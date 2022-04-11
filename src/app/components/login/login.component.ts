import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  onSubmit(login: any) {

    this.userService.loginUser(login.value);
    console.log('Usuario registrado')


  }
}
