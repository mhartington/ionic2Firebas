import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
declare var firebase: any;

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
  defaultFirebase({
    apiKey: 'AIzaSyBIQYn2jsQc61I0uc3PCaIG4NOLaw-ZAG4',
    authDomain: 'cambridge-firebase.firebaseapp.com',
    databaseURL: 'https://cambridge-firebase.firebaseio.com',
    storageBucket: 'cambridge-firebase.appspot.com',
  })
]);
