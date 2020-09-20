import { Component, OnInit } from '@angular/core';
import { TeamEvent } from './modules/core/types/team-event';
import { Article } from './modules/core/types/article';
import { Player } from './modules/core/types/player';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  ngOnInit(): void {
    interval(1000)
      .subscribe(() => {
        this.tick();
      });
  }

  teamEvents: TeamEvent[] = [
    {
      date: new Date('2020-10-03T11:00:00.000+02:00'),
      teamA: 'Hronov',
      teamB: 'Benešov',
      outEventTeam: 'Hronov',
      eventUrl: null
    },
    {
      date: new Date('2020-10-17T11:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'M. Hradiště',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/314490516274104/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: new Date('2020-10-31T11:00:00.000+02:00'),
      teamA: 'Turnov',
      teamB: 'Benešov',
      outEventTeam: 'Turnov',
      eventUrl: null
    },
    {
      date: new Date('2020-11-07T11:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Praga',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/4021482401436881/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: new Date('2020-11-14T10:00:00.000+02:00'),
      teamA: 'Malá Skála',
      teamB: 'Benešov',
      outEventTeam: 'Malá Skála',
      eventUrl: null
    },
    {
      date: new Date('2020-11-29T10:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Kolín',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/2952402298203704/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: new Date('2020-12-05T09:00:00.000+02:00'),
      teamA: 'D. Králové n. L.',
      teamB: 'Benešov',
      outEventTeam: 'D. Králové n. L.',
      eventUrl: null
    },
    {
      date: new Date('2020-12-12T10:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Prosek',
      outEventTeam: null,
      eventUrl: 'https://www.facebook.com/events/733167414181603/?acontext=%7B%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D'
    },
    {
      date: new Date('2021-01-09T10:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Hronov',
      outEventTeam: null,
      eventUrl: null
    },
    {
      date: new Date('2021-01-23T10:00:00.000+02:00'),
      teamA: 'M. Hradiště',
      teamB: 'Benešov',
      outEventTeam: 'M. Hradiště',
      eventUrl: null
    },
    {
      date: new Date('2021-02-06T11:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Turnov',
      outEventTeam: null,
      eventUrl: null
    },
    {
      date: new Date('2021-02-13T10:00:00.000+02:00'),
      teamA: 'Praga',
      teamB: 'Benešov',
      outEventTeam: 'Praga',
      eventUrl: null
    },
    {
      date: new Date('2021-02-20T11:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Malá Skála',
      outEventTeam: null,
      eventUrl: null
    },
    {
      date: new Date('2021-03-06T10:00:00.000+02:00'),
      teamA: 'Kolín',
      teamB: 'Benešov',
      outEventTeam: 'Kolín',
      eventUrl: null
    },
    {
      date: new Date('2021-03-13T11:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'D. Králové n. L.',
      outEventTeam: null,
      eventUrl: null
    },
    {
      date: new Date('2021-03-20T10:00:00.000+02:00'),
      teamA: 'Prosek',
      teamB: 'Benešov',
      outEventTeam: 'Prosek',
      eventUrl: null
    },
  ];

  teamArticles: Article[] = [
    {
      imageUrl: 'assets/img/dress2.svg',
      date: '28.8.2020',
      title: 'Jdeme do sezóny v nových dresech',
      description: 'Letos budeme začínat soutěž v nových dresech. Věříme že nám sednou stejně dobře jako zápasy v druhé lize a přinesou nám štěstí.'
    },
    {
      imageUrl: 'assets/img/cross.svg',
      date: '16.2.2020',
      title: 'Vážení přátelé benešovského volejbalu. Se zármutkem v našich volejbalových srdcích Vám oznamujeme, že z našich řad odešli Jiří Kosík a Viktor Jiráček senior.',
      description: '<strong>Jiří Kosík</strong> (12.2.2020 - nedožitých 73 let). Byl dlouholetým členem volejbalového oddílu\n' +
        '        TJ Lokomotiva\n' +
        '        Benešov (později\n' +
        '        TJ ČSAD Benešov) od roku 1960 do roku 1980 jako aktivní hráč. Později do roku 1990 jako řadový člen\n' +
        '        oddílu. V civilním\n' +
        '        životě začínal po vyučení dřevomodelářem v Blanických strojírnách Vlašim jako zaměstnanec v truhlárně\n' +
        '        Železničního\n' +
        '        stavitelství Benešov, později jako mistr v truhlářské dílně, hlavní mistr v učilišti ŽS Benešov a po\n' +
        '        vzniku Středního\n' +
        '        odborného učiliště stavebního Benešov byl později jmenován do funkce ředitele, ve které pracoval až do\n' +
        '        roku 2012 kdy\n' +
        '        odešel do důchodu.\n' +
        '        <br>\n' +
        '        <strong>Viktor Jiráček senior</strong> (15.2.2020 - nedožitých 88 let). Byl dlouholetým členem\n' +
        '        volejbalového oddílu TJ\n' +
        '        Slavoj Benešov\n' +
        '        (později TJ Lokomotiva Benešov, TJ ČSAD Benešov a TJ Sokol Benešov) od roku 1953 do roku 1989 jako aktivní\n' +
        '        hráč a\n' +
        '        kapitán mužstva mužů. Později do roku 2018 postupně jako trenér družstva mužů a žen a také jako trenér\n' +
        '        mládeže.\n' +
        '        Současně byl také vedoucím mužstva mužů a žen. Ve výkonném výboru TJ Sokol Benešov vykonával funkci\n' +
        '        hospodáře. V\n' +
        '        civilním životě začínal v zahradnictví svých rodičů na pozemcích dnešní ZŠ v Dukelské ulici, které později\n' +
        '        sám\n' +
        '        provozoval až do roku cca 1970, kdy byla zahájena výstavby základní školy. Přijal nabídku pracovat jako\n' +
        '        vedoucí v\n' +
        '        zahradnictví Komunálních služeb Benešov, které se nacházelo v lokalitě Zimního stadionu Benešov a kde\n' +
        '        pracoval až do\n' +
        '        odchodu do důchodu. Ani potom práce na zahradě neopustil a věnoval se soukromé zahrádce Na Sladovce a\n' +
        '        především\n' +
        '        činnosti ve volejbalovém oddílu. Poslední dva roky začali Viktora limitovat potíže s pohybovým ústrojím,\n' +
        '        které\n' +
        '        ukončili jeho bohatou, pestrou a oblíbenou činnost na poli sportovním a práce na zahradě. Na oba budeme\n' +
        '        vzpomínat -\n' +
        '        oddíl volejbalu TJ Sokol Benešov.'
    }
  ];

  players: Player[] = [
    {
      fullName: 'Bartůšek Jan',
      year: '1993',
      roles: 'Smečař',
      imageUrl: 'assets/img/players/bartusekjan.png',
      social: 'https://www.facebook.com/jan.bartusek.1'
    },
    {
      fullName: 'Bartůšek Josef',
      year: '1987',
      roles: 'Smečař, univerzál',
      imageUrl: 'assets/img/players/bartusekj.png',
      social: 'https://www.facebook.com/pepa.bartusek.5'
    },
    {
      fullName: 'Boháč Martin',
      year: '1981',
      roles: 'Smečař',
      imageUrl: 'assets/img/players/bohac.png',
      social: 'https://www.facebook.com/profile.php?id=1177376910',
      height: '189 cm'
    },
    {
      fullName: 'Hájek Michal',
      year: '1982',
      roles: 'Blokař',
      imageUrl: 'assets/img/players/no-person.png',
      social: 'https://www.facebook.com/michal.hajek.50',
    },
    {
      fullName: 'Hlavnička Jiří',
      year: '1982',
      roles: 'Nahrávač',
      imageUrl: 'assets/img/players/hlavnicka.png',
      social: 'https://www.facebook.com/jiri.hlavnicka.9',
    },
    {
      fullName: 'Janák Martin',
      year: '1985',
      roles: 'Libero',
      imageUrl: 'assets/img/players/martin-janak.jpg',
      social: 'https://www.facebook.com/martin.janak.12',
    },
    {
      fullName: 'Janák Michal',
      year: '1985',
      roles: 'Nahrávač',
      imageUrl: 'assets/img/players/no-person.png',
      social: 'https://www.facebook.com/michal.janak.96',
    },
    {
      fullName: 'Kočí Petr',
      year: '1981',
      roles: 'Blokař, trenér',
      imageUrl: 'assets/img/players/koci.png',
      social: 'https://www.facebook.com/petr.koci.75',
    },
    {
      fullName: 'Kunc Martin',
      year: '1981',
      roles: 'Univarzál, blokař, libero',
      imageUrl: 'assets/img/players/kunc.png',
      social: 'https://www.facebook.com/kivik',
      height: '189 cm'
    },
    {
      fullName: 'Kysela Ondřej',
      year: '1991',
      roles: 'Univerál, libero',
      imageUrl: 'assets/img/players/no-person.png',
      social: 'https://www.facebook.com/ondrej.kysela.7',
    },
    {
      fullName: 'Kyselka Jan',
      year: '1985',
      roles: 'Blokař',
      imageUrl: 'assets/img/players/kyselka.png',
      social: 'https://www.facebook.com/jan.kyselka.39',
    },
    {
      fullName: 'Lang Michal',
      year: '1984',
      roles: 'Libero, smečař, univerzál',
      imageUrl: 'assets/img/players/lang.png',
      social: 'https://www.facebook.com/michal.lang.18',
    },
    {
      fullName: 'Řehák Petr',
      year: '1974',
      roles: 'Smečař',
      imageUrl: 'assets/img/players/rehak.png',
      social: 'https://www.facebook.com/profile.php?id=100007576965329',
      height: '190 cm',
      heightOfPlay: '330 cm'
    },
    {
      fullName: 'Šupka Matěj',
      year: '2001',
      roles: 'Smečař',
      imageUrl: 'assets/img/players/no-person.png',
      social: 'https://www.facebook.com/matej.supka.5',
    },
    {
      fullName: 'Votruba Viktor',
      year: '1977',
      roles: 'Blokař, asistent trenéra',
      imageUrl: 'assets/img/players/votruba.png',
      social: 'https://www.facebook.com/viktor.votruba.5',
    },
  ];

  tick() {
    const nextEvents: TeamEvent[] = this.teamEvents.filter(item => item.date >= new Date());
    if (!nextEvents || !nextEvents?.length) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      return;
    }
    const dates: TeamEvent[] =
      nextEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const pom = dates[0].date.getTime() - new Date().getTime();
    this.days = Math.floor(pom / (24 * 60 * 60 * 1000));
    this.hours = Math.floor((pom - (this.days * 24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    this.minutes = Math.floor((pom - (this.days * 24 * 60 * 60 * 1000) - (this.hours * 60 * 60 * 1000)) / (60 * 1000));
    this.seconds = Math.floor((pom - (this.days * 24 * 60 * 60 * 1000) - (this.hours * 60 * 60 * 1000) - (this.minutes * 60 * 1000)) / (1000));
  }
}
