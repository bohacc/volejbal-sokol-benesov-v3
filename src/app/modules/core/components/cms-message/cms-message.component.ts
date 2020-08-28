import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms-message',
  templateUrl: './cms-message.component.html',
  styleUrls: ['./cms-message.component.scss']
})
export class CmsMessageComponent implements OnInit {
  @Input() date: Date;
  @Input() title: string;
  @Input() image: string;
  @Input() imgCyrcle: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
