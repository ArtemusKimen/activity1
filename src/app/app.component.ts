import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBCAHmM4jtw7pJNHRCjWX86dhst-uQKv2E',
      authDomain: 'activity1-580a1.firebaseapp.com',
      databaseURL: 'https://activity1-580a1.firebaseio.com',
      projectId: 'activity1-580a1',
      storageBucket: 'activity1-580a1.appspot.com',
      messagingSenderId: '969798377313',
      appId: '1:969798377313:web:0ee2679a5173df52'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
