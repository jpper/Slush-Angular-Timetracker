import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
