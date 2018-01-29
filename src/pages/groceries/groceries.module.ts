import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Groceries } from './groceries';

@NgModule({
  declarations: [
    Groceries,
  ],
  imports: [
    IonicPageModule.forChild(Groceries),
  ],
})
export class GroceriesPageModule {}
