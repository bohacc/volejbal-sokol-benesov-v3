import { Component, Input, OnInit } from '@angular/core';
import { TeamEvent } from '../../types/team-event';

@Component({
  selector: 'app-team-event',
  templateUrl: './team-event.component.html',
  styleUrls: ['./team-event.component.scss']
})
export class TeamEventComponent implements OnInit {
  @Input() teamEvent: TeamEvent;
  @Input() even: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
