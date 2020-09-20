import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../types/article';

@Component({
  selector: 'app-team-article',
  templateUrl: './team-article.component.html',
  styleUrls: ['./team-article.component.scss']
})
export class TeamArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
