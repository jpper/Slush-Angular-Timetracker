import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  email: string;
  password: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }

}
