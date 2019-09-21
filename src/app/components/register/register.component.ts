import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User;

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) { }

  ngOnInit() {
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }

  registerWithEmail() {
    this.registerService.createUser(this.user);
  }

}
