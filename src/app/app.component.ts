import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TeamEvent } from './modules/core/types/team-event';
import { Article } from './modules/core/types/article';
import { Player } from './modules/core/types/player';
import { interval } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

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
  daysText: string;
  hoursText: string;
  minutesText: string;
  secondsText: string;
  sortArticles: Article[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.sortArticles = this.teamArticles.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      interval(1000)
        .subscribe(() => {
          this.tick();
        });
    }
  }

  teamEvents: TeamEvent[] = [
    {
      date: new Date('2021-10-02T10:00:00.000+02:00'),
      teamA: 'Mn. Hradiště',
      teamB: 'Benešov',
      outEventTeam: 'Mn. Hradiště',
      eventUrl: null
    },
    {
      date: new Date('2021-10-09T10:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Dvůr Králové',
      outEventTeam: null,
      eventUrl: ''
    },
    {
      date: new Date('2021-10-23T10:00:00.000+02:00'),
      teamA: 'Kolín',
      teamB: 'Benešov',
      outEventTeam: 'Kolín',
      eventUrl: null
    },
    {
      date: new Date('2021-11-06T10:00:00.000+02:00'),
      teamA: 'Malá Skála',
      teamB: 'Benešov',
      outEventTeam: 'Malá Skála',
      eventUrl: ''
    },
    {
      date: new Date('2021-11-20T10:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Prosek',
      outEventTeam: '',
      eventUrl: null
    },
    {
      date: new Date('2021-11-27T10:00:00.000+02:00'),
      teamA: 'Praga',
      teamB: 'Benešov',
      outEventTeam: 'Praga',
      eventUrl: ''
    },
    {
      date: new Date('2021-12-04T10:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Hronov',
      outEventTeam: '',
      eventUrl: null
    },
    {
      date: new Date('2022-01-15T10:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Mn. Hradiště',
      outEventTeam: null,
      eventUrl: ''
    },
    {
      date: new Date('2022-01-22T10:00:00.000+02:00'),
      teamA: 'Dvůr Králové',
      teamB: 'Benešov',
      outEventTeam: 'Dvůr Králové',
      eventUrl: null
    },
    {
      date: new Date('2022-02-05T10:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Kolín',
      outEventTeam: '',
      eventUrl: null
    },
    {
      date: new Date('2022-02-19T10:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Malá Skála',
      outEventTeam: null,
      eventUrl: null
    },
    {
      date: new Date('2022-02-26T10:00:00.000+02:00'),
      teamA: 'Prosek',
      teamB: 'Benešov',
      outEventTeam: 'Prosek',
      eventUrl: null
    },
    {
      date: new Date('2022-03-05T10:00:00.000+02:00'),
      teamA: 'Benešov',
      teamB: 'Praga',
      outEventTeam: null,
      eventUrl: null
    },
    {
      date: new Date('2022-03-19T10:00:00.000+02:00'),
      teamA: 'Hronov',
      teamB: 'Benešov',
      outEventTeam: 'Hronov',
      eventUrl: null
    },
  ];

  teamArticles: Article[] = [
    {
      imageUrl: 'assets/img/memorial.jpeg',
      target: 'article4',
      date: new Date('2021-06-07T10:00:00.000+02:00'),
      shortTitle: 'Memoriál Viktorů Jiráčků - 19.6.2021',
      title: 'Memoriál - Volejbalový turnaj',
      description: 'Zveme vás na 5. ročník memoriálu na počest Viktorů Jiráčků. Memoriál se bude konat 19.6.2021 v trampské osadě Albatros (Městečko u Benešova)' +
        'Akce začíná v 8:30. Občerstvení bude zajištěno, následně pak posezení u táboráku s hudbou. Přijeďte si zahrát nebo jenom zafandit a pobavit se.',
    },
    {
      imageUrl: 'assets/img/article.svg',
      target: 'article3',
      date: new Date('2020-10-08T10:00:00.000+02:00'),
      shortTitle: 'Benešov x Hronov',
      title: 'Prvním soupeřem benešovských byl trvalý účastník 2. ligy – VK Hronov.',
      description: '2 liga zahájena. Sokol Benešov se do ní vrátil po 50 letech. Prvním soupeřem benešovských byl trvalý účastník 2. ligy – VK Hronov. VK Hronov bojuje každý rok o první příčky tabulky a svou kvalitu dokázal i tento víkend. Vlivem zdravotních komplikací vyjela na úvodní utkání oslabená sedmičlenná sestava Benešova. <br><br>' +
        '1. Zápas VK Hronov x TJ Sokol Benešov u Prahy (3 : 0)- (25: 17; 20; 14)\n' +
        'Sestava Benešov – M. Hájek, Mi. Janák, Ma. Janák, J. Kozel, O. Kysela, J. Kyselka, M. Šupka\n' +
        'V prvním setu byla benešovském týmu znát nervozita a jistá nesehranost. I když se vše snažili nahradit bojovností, nestačilo to na více než 17 bodů. V druhém setu se síly vyrovnaly a až do střední části setu byly týmy vyrovnanými soupeři. Následně se ukázala kvalita domácího celku, který těžkým plachtícím servisem a skvělou obranou utekl benešovským a ukončil set za stavu 25:20. Třetí set byl už plně v režii domácích, benešovští nenašli sílu na odpor a set skončil 25:14.\n' +
        '<br><br>' +
        '2. Zápas VK Hronov x TJ Sokol Benešov u Prahy (3 : 0)- (25: 16, 17, 22)\n' +
        'Sestava Benešov – M. Hájek, Mi. Janák, Ma. Janák, J. Kozel, O. Kysela, J. Kyselka, M. Šupka',
    },
    {
      imageUrl: 'assets/img/cup.svg',
      target: 'article1',
      date: new Date('2020-10-06T10:00:00.000+02:00'),
      shortTitle: 'Český pohár',
      title: 'Postupem do 2 ligy dostal Sokol Benešov možnost hrát v celonárodní soutěži s top kluby v ČR a to v Českém poháru.',
      description: 'Postupem do 2 ligy dostal Sokol Benešov možnost hrát v celonárodní soutěži s top kluby v ČR a to v Českém poháru. První kolo této soutěže se uskutečnilo 26. – 27.9. 2020 v Chocni. Do prvního kola skupiny B Českého poháru byli nalosováni s týmy VK Benátky nad Jizerou (1. liga), TJ Sokol Letovice (2. liga), VK Choceň (2. liga) a TJ Sokol Benešov (nováček 2 ligy). Díky zdravotním komplikacím vyjela na turnajový víkend benešovská sestava bez klasického univerzála a pouze s jedním nahrávačem. Z lavičky tým koučoval a doprovázel zraněný nahrávač Jiří Hlavnička.\n' +
        'Benešov x Benátky (0:3)<br><br> \n' +
        'Na první zápas Benešov nastoupil proti favoritovi skupiny B, VK Benátky nad Jizerou, s bývalými extraligovými hráči (např. Vítek Bartůňěk – kapitán Benátek). Na benešovském družstvu byla patrná nervozita, která se projevila v prvním setu s výsledkem 25:10. Od druhého setu benešovští oklepali nervozitu a ve střední části setů drželi krok s favoritem. Zvláště proti útoku středem favorit nenašel obranu. V závěru setů se projevila kvalita družstva Benátek a sety skončili stejným výsledkem 17:25 a 17:25.\n' +
        'Benešov x Choceň (0:3)<br><br>\n' +
        'Do druhého zápasu benešovští nastoupili s chutí a předváděli slušnou a vyrovnanou hrou. Přes veškeré snažení hostů skončili sety 19:25, 21:25, 22:25. Rozdíl mezi hrou Benešova a Chocně byla v kvalitě přijmu a servisu. I přes nelichotivý stav na sety benešovští předvedli dobrou hru a rozhodně se v 2 lize, pokud budou předvádět takové výkony nemají čeho bát.\n' +
        'Benešov Letovice (0:3)<br><br>\n' +
        'V neděli nastoupil tým Benešova ve zdecimované sestavě čítající 7 lidí. Bez klasického libera a univerzálního Jana Kyselky (do té doby nastoupil na postech univerzála, smečaře i univerzála). Role libera se ujal Martin Kunc a nutno říci, že z jeho strany to byl nejlepší výkon na Českém poháru. Bez možnosti střídání tým Benešova odehrál to na co v danou situaci měl.\n' +
        'Co říci závěrem. Tým Benešova rozhodně neudělal ostudu, turnaj s kvalitními soupeři prověřil jeho formu a znamenal cenné zkušenosti, které lze využít v následujících kláních. Tým si získal podporu domácích fanoušků a zejména díky Viktorovi Votrubovi zahájili družbu s domácím celkem s příslibem další spolupráce.'
    },
    {
      imageUrl: 'assets/img/dress2.svg',
      target: 'article2',
      date: new Date('2020-08-28T10:00:00.000+02:00'),
      title: 'Jdeme do sezóny v nových dresech',
      description: 'Letos budeme začínat soutěž v nových dresech. Věříme, že nám sednou stejně dobře jako zápasy v druhé lize a přinesou nám štěstí.'
    },
    {
      imageUrl: 'assets/img/cross.svg',
      target: '#article2',
      date: new Date('2020-02-16T10:00:00.000+02:00'),
      shortTitle: 'Smutná zpráva',
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
      fullName: 'Čech Ondřej',
      year: '1984',
      roles: 'Blokař',
      imageUrl: 'assets/img/players/no-person.png',
      social: null
    },
    {
      fullName: 'Eisenberger Michal',
      year: '2000',
      roles: 'Univerzál',
      imageUrl: 'assets/img/players/eisenberger.png',
      social: 'https://www.facebook.com/michal.eisenberger.7',
    },
    {
      fullName: 'Hájek Michal',
      year: '1982',
      roles: 'Blokař',
      imageUrl: 'assets/img/players/no-person.png',
      social: 'https://www.facebook.com/michal.hajek.50',
    },
    {
      fullName: 'Havránek Tomáš',
      year: '2003',
      roles: 'Smečař',
      imageUrl: 'assets/img/players/no-person.png',
    },
    {
      fullName: 'Hlavnička Jiří',
      year: '1982',
      roles: 'Nahrávač',
      imageUrl: 'assets/img/players/hlavnicka.png',
      social: 'https://www.facebook.com/jiri.hlavnicka.9',
    },
    {
      fullName: 'Hudeček Martin',
      year: '1984',
      roles: 'Smečař',
      imageUrl: 'assets/img/players/no-person.png',
      social: 'https://www.facebook.com/martin.hudecek.167',
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
      imageUrl: 'assets/img/players/janakmi.png',
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
      fullName: 'Kozel Jakub',
      year: '2001',
      roles: 'Smečař',
      imageUrl: 'assets/img/players/kozel.png',
      social: 'https://www.facebook.com/jakub.kozel.9',
    },
    /*{
      fullName: 'Kunc Martin',
      year: '1981',
      roles: 'Univarzál, blokař, libero',
      imageUrl: 'assets/img/players/kunc.png',
      social: 'https://www.facebook.com/kivik',
      height: '189 cm'
    },*/
    /*{
      fullName: 'Kysela Ondřej',
      year: '1991',
      roles: 'Univerzál, libero',
      imageUrl: 'assets/img/players/no-person.png',
      social: 'https://www.facebook.com/ondrej.kysela.7',
    },*/
    {
      fullName: 'Kyselka Jan',
      year: '1985',
      roles: 'Blokař',
      imageUrl: 'assets/img/players/kyselka.png',
      social: 'https://www.facebook.com/jan.kyselka.39',
    },
    /*{
      fullName: 'Lang Michal',
      year: '1984',
      roles: 'Libero, smečař, univerzál',
      imageUrl: 'assets/img/players/lang.png',
      social: 'https://www.facebook.com/michal.lang.18',
    },*/
    {
      fullName: 'Pina Ondřej',
      year: '1981',
      roles: 'Smečař',
      imageUrl: 'assets/img/players/no-person',
      social: 'https://www.facebook.com/ondrej.pina.16',
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
      nextEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
    const pom = dates[0].date.getTime() - new Date().getTime();
    this.days = Math.floor(pom / (24 * 60 * 60 * 1000));
    this.daysText = this.getDaysText(this.days);
    this.hours = Math.floor((pom - (this.days * 24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    this.hoursText = this.getHoursText(this.hours);
    this.minutes = Math.floor((pom - (this.days * 24 * 60 * 60 * 1000) - (this.hours * 60 * 60 * 1000)) / (60 * 1000));
    this.minutesText = this.getMinutesText(this.minutes);
    this.seconds = Math.floor((pom - (this.days * 24 * 60 * 60 * 1000) - (this.hours * 60 * 60 * 1000) - (this.minutes * 60 * 1000)) / (1000));
    this.secondsText = this.getSecondsText(this.seconds);
  }

  getDaysText(value: number): string {
    const texts: string[] = ['Den', 'Dny', 'Dní'];
    return this.getTextByIndex(texts, value);
  }

  getHoursText(value: number): string {
    const texts: string[] = ['Hodina', 'Hodiny', 'Hodin'];
    return this.getTextByIndex(texts, value);
  }

  getMinutesText(value: number): string {
    const texts: string[] = ['Minuta', 'Minuty', 'Minut'];
    return this.getTextByIndex(texts, value);
  }

  getSecondsText(value: number): string {
    const texts: string[] = ['Sekunda', 'Sekundy', 'Sekund'];
    return this.getTextByIndex(texts, value);
  }

  getTextByIndex(texts: string[], value: number): string {
    if (value === 1) {
      return texts[0];
    } else if (value > 1 && value < 5) {
      return texts[1];
    } else {
      return texts[2];
    }
  }
}
