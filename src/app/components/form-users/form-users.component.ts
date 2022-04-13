import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {

  form: FormGroup
  constructor(private usersService: UsersService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9!.]{5,12}$/)]),
      date_birth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      languageHas: new FormControl('', [Validators.required]),
      languageWant: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usersService.createUser(this.form.value);
    console.log(response)
  }

}
