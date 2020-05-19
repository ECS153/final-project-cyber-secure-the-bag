import { Component } from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: "AIzaSyDHcsUUebBHnQsHGWICYJ94yF9MNBy_jfk",
  authDomain: "trojan-extension.firebaseapp.com",
  databaseURL: "https://trojan-extension.firebaseio.com",
  projectId: "trojan-extension",
  storageBucket: "trojan-extension.appspot.com",
  messagingSenderId: "877750932647",
  appId: "1:877750932647:web:3e7a0499c27c265ec13782"
};

var firebaseProject = firebase.initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrojanApp';
}
console.log("start")
let values = firebaseProject.firestore().collection('testDataBase').get() // "[DEFAULT]"
console.log("Here")