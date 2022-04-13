import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(login: any) {

    const respuesta = await this.userService.loginUser(login.value);
    if (respuesta.error) {
      alert(respuesta.error)
    } else {

      /*  alert(respuesta.success)
       console.log(respuesta.token) */
      //Cuando hago login lo guardo en localStorage
      localStorage.setItem('token', respuesta.token)
      this.router.navigate(['/home'])


    };






  }
}
