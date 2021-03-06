import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class Notes {

  notes: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }



  addNote(){

    let prompt = this.alertCtrl.create({
      title: 'Add Note',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.notes.push(data);
          }
        }
      ]
    });

    prompt.present();
  }

  editNote(note){

    let prompt = this.alertCtrl.create({
      title: 'Edit Note',
      inputs: [{
        name: 'title'
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let index = this.notes.indexOf(note);

            if(index > -1){
              this.notes[index] = data;
            }
          }
        }
      ]
    });

    prompt.present();

  }

  deleteNote(note){

    let index = this.notes.indexOf(note);

    if(index > -1){
      this.notes.splice(index, 1);
    }
  }

}
