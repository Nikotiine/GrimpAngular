import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-home',
  templateUrl: './u-home.component.html',
  styleUrls: ['./u-home.component.scss'],
})
export class UHomeComponent {
  cardData: any[] = [
    {
      title: 'site',
      text: 'card pour site',
      btnLeft: 'Voir tous les site',
      btnRight: 'Ajouter un site',
    },

    {
      title: 'voie',
      text: 'card pour voies',
      btnLeft: 'Voir tous les voies',
      btnRight: 'Ajouter une voies',
    },

    {
      title: 'croix',
      text: 'card pour croix',
      btnLeft: 'Voir tous tes croix',
      btnRight: 'Ajouter une croix',
    },
  ];

  site: any = {
    title: 'site',
    text: 'card pour site',
    btnLeft: 'Voir tous les site',
    btnRight: 'Ajouter un site',
  };

  voie: any = {
    title: 'voie',
    text: 'card pour voies',
    btnLeft: 'Voir tous les voies',
    btnRight: 'Ajouter une voies',
  };

  croix: any = {
    title: 'croix',
    text: 'card pour croix',
    btnLeft: 'Voir tous tes croix',
    btnRight: 'Ajouter une croix',
  };

  constructor() {}
}
