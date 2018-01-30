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

            //means if index is true and there is a note saved
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

//.splice(index, how many
// indexes to remove - here remove 1 position which
// is at position of index - our note -)

    if(index > -1){
      this.notes.splice(index, 1);
    }
  }

}
