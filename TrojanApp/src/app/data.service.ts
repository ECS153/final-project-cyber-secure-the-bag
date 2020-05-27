import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Data } from 'src/app/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

  getData() {
    return this.firestore.collection('Password Data').snapshotChanges();
  }
}


