import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../../_service/site.service';
import {
  approchType,
  direction,
  equipment,
  equipmentQuality,
  ICategorie,
  level,
  rockType,
  routProfil,
} from '../../../_models/i-categorie';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SiteCredential } from '../../../_models/i-site';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  levels: level[] = [];
  directions: direction[] = [];
  rockTypes: rockType[] = [];
  equipments: equipment[] = [];
  profils: routProfil[] = [];
  approachTypes: approchType[] = [];
  equipmentQualityList: equipmentQuality[] = [];
  parkingAlternatif: boolean = false;

  constructor(private siteService: SiteService) {
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
      minimumLevel: new FormControl(''),
      maximumLevel: new FormControl(''),
      approachTime: new FormControl(''),
      approachType: new FormControl(''),
      equipment: new FormControl(''),
      equimentQuality: new FormControl(''),
      direction: new FormControl(''),
      rockType: new FormControl(''),
      routProfil: new FormControl(''),
      latitudeP1: new FormControl(''),
      longitudeP1: new FormControl(''),
      latitudeP2: new FormControl(null),
      longitudeP2: new FormControl(null),
      reseau4g: new FormControl(false),
      water: new FormControl(false),
      toilette: new FormControl(false),
      river: new FormControl(false),
    });
  }

  ngOnInit(): void {
    this.siteService.getAllDetail().subscribe({
      next: data => {
        this.levels = data.levelList;
        this.rockTypes = data.rockTypeList;
        this.profils = data.routProfilList;
        this.directions = data.directionsList;
        this.approachTypes = data.approchTypeList;
        this.equipments = data.equipmentList;
        this.equipmentQualityList = data.equipmentQualityList;
      },
      error: err => console.log(err),
    });
  }
  addParkingAlternatif($event: any) {
    $event.preventDefault();
    this.parkingAlternatif = !this.parkingAlternatif;
  }

  onSubmit($event: any) {
    $event.preventDefault();
    const credentials: SiteCredential = new SiteCredential(
      this.createForm.controls['name'].value,
      this.createForm.controls['minimumLevel'].value,
      this.createForm.controls['maximumLevel'].value,
      this.createForm.controls['approachTime'].value,
      this.createForm.controls['approachType'].value,
      this.createForm.controls['equipment'].value,
      this.createForm.controls['equimentQuality'].value,
      this.createForm.controls['direction'].value,
      this.createForm.controls['rockType'].value,
      this.createForm.controls['routProfil'].value,
      this.createForm.controls['latitudeP1'].value,
      this.createForm.controls['longitudeP1'].value,
      this.createForm.controls['latitudeP2'].value,
      this.createForm.controls['longitudeP2'].value,
      this.createForm.controls['reseau4g'].value,
      this.createForm.controls['water'].value,
      this.createForm.controls['toilette'].value,
      this.createForm.controls['river'].value
    );
    console.log(credentials);
  }
}
