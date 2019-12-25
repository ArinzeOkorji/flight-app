import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  username: 'demo';
  password: 'demo';

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
  }

}
