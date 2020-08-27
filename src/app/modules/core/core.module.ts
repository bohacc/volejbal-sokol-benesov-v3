import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CmsMessageComponent } from './components/cms-message/cms-message.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    CmsMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageHeaderComponent,
    CmsMessageComponent
  ]
})
export class CoreModule { }
