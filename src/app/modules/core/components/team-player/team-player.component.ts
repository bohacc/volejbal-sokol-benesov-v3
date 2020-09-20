import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../types/player';

@Component({
  selector: 'app-team-player',
  templateUrl: './team-player.component.html',
  styleUrls: ['./team-player.component.scss']
})
export class TeamPlayerComponent implements OnInit {
  @Input() player: Player;
  @Input() even: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
