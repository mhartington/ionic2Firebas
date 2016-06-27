import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public items = this.af.database.list('posts');
  constructor(
    private af: AngularFire
  ) {}
}
