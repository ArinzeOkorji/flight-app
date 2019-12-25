import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  username = 'demo';
  password = 'demo';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.router.navigateByUrl('home-page');
  }

}
