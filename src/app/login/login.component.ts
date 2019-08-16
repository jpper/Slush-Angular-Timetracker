import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
// import 'hammerjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;

  email: string;
  password: string;

  constructor(private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
    // 認証状態の変更を監視しておく
    this.user = this.angularFireAuth.authState;
    this.user.subscribe(u => console.log(u.providerData));
  }

  // ログアウト
  async logout() {
    this.angularFireAuth.auth.signOut();
  }

  // Google認証によるログイン
  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.auth.signInWithPopup(provider);
  }

  // 匿名認証
  async loginAnonymously() {
    const credential = await this.angularFireAuth.auth.signInAnonymously();
  }

  // メールアドレスとパスワード
  async loginWithEmailAndPassword() {
    try {
      // ユーザーの登録
      const credential = await this.angularFireAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
    } catch (error) {
      if (error.code = 'auth/email-already-in-use') {
        // すでに使われている場合は、ログインに切り替える
        await this.angularFireAuth.auth.signInWithEmailAndPassword(this.email, this.password);
      }
      console.log(error);
    } finally {
      this.email = '';
      this.password = '';
    }
  }

  // 匿名ユーザーをグーグル認証でアップグレード
  async upgradeAnonymouosWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.auth.currentUser.linkWithPopup(provider);
  }

}
