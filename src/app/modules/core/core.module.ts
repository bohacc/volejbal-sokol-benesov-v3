import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CmsMessageComponent } from './components/cms-message/cms-message.component';
import { TeamEventComponent } from './components/team-event/team-event.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    CmsMessageComponent,
    TeamEventComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageHeaderComponent,
    CmsMessageComponent,
    TeamEventComponent
  ]
})
export class CoreModule { }
