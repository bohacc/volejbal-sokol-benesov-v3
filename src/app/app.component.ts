import { Component } from '@angular/core';
import { TeamEvent } from './modules/core/types/team-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teamEvents: TeamEvent[] = [
    {
      date: '3.10.2020',
      teamA: 'Hronov',
      teamB: 'Benešov',
      outEventTeam: 'Hronov',
      eventUrl: null
    },
    {
      date: '17.10.2020',
      teamA: 'Benešov',
      teamB: 'M. Hradiště',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/314490516274104/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: '31.10.2020',
      teamA: 'Turnov',
      teamB: 'Benešov',
      outEventTeam: 'Turnov',
      eventUrl: null
    },
    {
      date: '7.11.2020',
      teamA: 'Benešov',
      teamB: 'Praga',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/314490516274104/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: '14.11.2020',
      teamA: 'Malá Skála',
      teamB: 'Benešov',
      outEventTeam: 'Malá Skála',
      eventUrl: null
    },
    {
      date: '29.11.2020',
      teamA: 'Benešov',
      teamB: 'Kolín',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/314490516274104/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: '5.12.2020',
      teamA: 'D. Králové n. L.',
      teamB: 'Benešov',
      outEventTeam: 'D. Králové n. L.',
      eventUrl: null
    },
    {
      date: '12.12.2020',
      teamA: 'Benešov',
      teamB: 'Prosek',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/314490516274104/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: '9.1.2021',
      teamA: 'Benešov',
      teamB: 'Hronov',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/314490516274104/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: '23.1.2021',
      teamA: 'M. Hradiště',
      teamB: 'Benešov',
      outEventTeam: 'M. Hradiště',
      eventUrl: null
    },
    {
      date: '6.2.2021',
      teamA: 'Benešov',
      teamB: 'Turnov',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/314490516274104/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: '13.2.2021',
      teamA: 'Praga',
      teamB: 'Benešov',
      outEventTeam: 'Praga',
      eventUrl: null
    },
    {
      date: '20.2.2021',
      teamA: 'Benešov',
      teamB: 'Malá Skála',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/314490516274104/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: '6.3.2021',
      teamA: 'Kolín',
      teamB: 'Benešov',
      outEventTeam: 'Kolín',
      eventUrl: null
    },
    {
      date: '13.3.2021',
      teamA: 'Benešov',
      teamB: 'D. Králové n. L.',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/314490516274104/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: '20.3.2021',
      teamA: 'Prosek',
      teamB: 'Benešov',
      outEventTeam: 'Prosek',
      eventUrl: null
    },
  ]
}
