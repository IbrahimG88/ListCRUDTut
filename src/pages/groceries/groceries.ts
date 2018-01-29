import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GroceriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groceries',
  templateUrl: 'groceries.html',
})
export class Groceries {

  groceries: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.groceries = [
      'Bread',
      'Milk',
      'Cheese',
      'Snacks',
      'Apples',
      'Bananas',
      'Peanut Butter',
      'Chocolate',
      'Avocada',
      'Vegemite',
      'Muffins',
      'Paper towels'
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroceriesPage');
  }

}
