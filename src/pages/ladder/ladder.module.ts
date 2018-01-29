import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ladder } from './ladder';

@NgModule({
  declarations: [
    Ladder,
  ],
  imports: [
    IonicPageModule.forChild(Ladder),
  ],
})
export class LadderPageModule {}
