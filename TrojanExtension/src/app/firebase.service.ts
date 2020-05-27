import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})


export class FirebaseService {
  constructor(private firestore: AngularFirestore) { }
  
  addDataFromStorage() {
    let data = JSON.parse(localStorage.getItem("information"))
    this.firestore.collection('Password Data').doc('Total Users').get().subscribe(d => {
      let user = d.get('users')
      if(data != null){

        const doc = this.firestore.collection('Password Data').doc(user.toString()).set(data)
        localStorage.removeItem("information")
      }
      user = user+1;
      this.firestore.collection('Password Data').doc('Total Users').set({
        users: user
      });
    });
  }
}
