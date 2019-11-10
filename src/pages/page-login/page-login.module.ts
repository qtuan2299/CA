import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageLoginPage } from './page-login';

@NgModule({
  declarations: [
    PageLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PageLoginPage),
  ],
})
export class PageLoginPageModule {}
