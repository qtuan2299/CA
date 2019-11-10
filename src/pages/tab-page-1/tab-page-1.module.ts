import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Person } from './tab-page-1';



@NgModule({
  declarations: [
    Person
  ],
  imports: [
    IonicPageModule.forChild(Person),
    
  ],
  entryComponents: [Person]
})
export class PersonalModule { }
