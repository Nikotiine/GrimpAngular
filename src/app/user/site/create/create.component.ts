import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../../_service/site.service';
import {
  approchType,
  direction,
  equipment,
  ICategorie,
  level,
  rockType,
  routProfil,
} from '../../../_models/i-categorie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  levels: level[] = [];
  directions: direction[] = [];
  rockTypes: rockType[] = [];
  equipments: equipment[] = [];
  profils: routProfil[] = [];
  approachTypes: approchType[] = [];

  constructor(private siteService: SiteService) {}

  ngOnInit(): void {
    this.siteService.getAllDetail().subscribe({
      next: data => {
        this.levels = data.levelList;
        this.rockTypes = data.rockTypeList;
        this.profils = data.routProfilList;
        this.directions = data.directionsList;
        this.approachTypes = data.approchTypeList;
        this.equipments = data.equipmentList;
      },
      error: err => console.log(err),
    });
  }
}
