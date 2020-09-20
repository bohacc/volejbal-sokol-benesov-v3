import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CmsMessageComponent } from './components/cms-message/cms-message.component';
import { TeamEventComponent } from './components/team-event/team-event.component';
import { TeamArticleComponent } from './components/team-article/team-article.component';
import { TeamPlayerComponent } from './components/team-player/team-player.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    CmsMessageComponent,
    TeamEventComponent,
    TeamArticleComponent,
    TeamPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageHeaderComponent,
    CmsMessageComponent,
    TeamEventComponent,
    TeamArticleComponent,
    TeamPlayerComponent
  ]
})
export class CoreModule { }
