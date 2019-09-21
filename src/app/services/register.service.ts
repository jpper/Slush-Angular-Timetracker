import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';

export interface User {
  id?: string;
  username: string;
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private usersCollection: AngularFirestoreCollection<User>;

  constructor() { }

  createUser(user: User): Promise<DocumentReference> {
    return this.usersCollection.add(user);
  }

}
