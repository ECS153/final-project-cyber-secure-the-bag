import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})


export class FirebaseService {
  constructor(private firestore: AngularFirestore) { }
  
  addDataFromStorage() {
    let data = JSON.parse(localStorage.getItem("information"))
    this.firestore.collection('testDataBase').doc('Trevor').set({
        site: "google",
        name: 'orli'
    });
  }
}
