import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-post',
  templateUrl: 'view-post.html',
})
export class ViewPostPage {
  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('data');
  }

}
