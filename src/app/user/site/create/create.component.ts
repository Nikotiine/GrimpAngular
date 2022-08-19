import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../../_service/site.service';
import {
  approchType,
  averageRout,
  direction,
  equipment,
  equipmentQuality,
  ICategorie,
  level,
  rockType,
  routProfil,
} from '../../../_models/i-categorie';
import { Observable } from 'rxjs';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { SiteCredential } from '../../../_models/i-site';
import { SecteurCredential } from '../../../_models/i-secteur';
import { Router } from '@angular/router';
import { CreateSiteValidator } from '../../../_helpers/create.site.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  validateMessage: string = '';
  validateTaost: boolean = false;
  createForm: FormGroup;
  levels: level[] = [];
  directions: direction[] = [];
  rockTypes: rockType[] = [];
  equipments: equipment[] = [];
  profils: routProfil[] = [];
  approachTypes: approchType[] = [];
  equipmentQualityList: equipmentQuality[] = [];
  averageRoutNumberList: averageRout[] = [];
  parkingAlternatif: boolean = false;
  modalSecteur: boolean = false;
  nbSecteur: number = 1;
  siteSecteur: SecteurCredential[] = [
    {
      name: 'Principal',
    },
  ];
  allName: string[] = [];
  constructor(private siteService: SiteService, private router: Router) {
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
      minimumLevel: new FormControl('', Validators.required),
      maximumLevel: new FormControl('', Validators.required),
      approachTime: new FormControl('', Validators.required),
      approachType: new FormControl('', Validators.required),
      equipment: new FormControl('', Validators.required),
      equimentQuality: new FormControl('', Validators.required),
      direction: new FormControl('', Validators.required),
      rockType: new FormControl('', Validators.required),
      routProfil: new FormControl('', Validators.required),
      averageRout: new FormControl('', Validators.required),
      averageHeight: new FormControl('', Validators.required),
      latitudeP1: new FormControl('', [
        Validators.required,
        CreateSiteValidator.validateLatitude(),
      ]),
      longitudeP1: new FormControl('', [
        Validators.required,
        CreateSiteValidator.validateLongitude(),
      ]),
      latitudeP2: new FormControl(null, CreateSiteValidator.validateLatitude()),
      longitudeP2: new FormControl(
        null,
        CreateSiteValidator.validateLongitude()
      ),
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
        this.averageRoutNumberList = data.averageRoutNumberList;
      },
      error: err => console.log(err),
    });
    this.siteService.getAllSpotName().subscribe({
      next: data => {
        this.allName = data;
      },
      error: err => {
        console.log(err);
      },
    });
  }
  addParkingAlternatif($event: any) {
    $event.preventDefault();
    this.parkingAlternatif = !this.parkingAlternatif;
  }
  infoGeneraleValidate(): boolean {
    return (
      this.createForm.controls['name'].valid &&
      this.createForm.controls['minimumLevel'].valid &&
      this.createForm.controls['maximumLevel'].valid
    );
  }
  infoApproachValidate(): boolean {
    return (
      this.createForm.controls['approachTime'].valid &&
      this.createForm.controls['approachType'].valid
    );
  }
  infoEquipmentValidate(): boolean {
    return (
      this.createForm.controls['equipment'].valid &&
      this.createForm.controls['equimentQuality'].valid
    );
  }
  infoRoutAndRockValidate(): boolean {
    return (
      this.createForm.controls['rockType'].valid &&
      this.createForm.controls['routProfil'].valid &&
      this.createForm.controls['direction'].valid
    );
  }
  infoParkingValidate(): boolean {
    return (
      this.createForm.controls['latitudeP1'].valid &&
      this.createForm.controls['longitudeP1'].valid
    );
  }
  infoHauteurSecteurValidate(): boolean {
    return (
      this.createForm.controls['averageRout'].valid &&
      this.createForm.controls['averageHeight'].valid
    );
  }
  allInfoValidate(): boolean {
    return (
      this.infoGeneraleValidate() &&
      this.infoRoutAndRockValidate() &&
      this.infoApproachValidate() &&
      this.infoParkingValidate() &&
      this.infoEquipmentValidate()
    );
  }
  longitudeIsInvalide(): boolean {
    return !!(
      this.createForm.controls['longitudeP1'].dirty &&
      this.createForm.controls['longitudeP1'].errors
    );
  }
  latitudeIsInvalide(): boolean {
    return !!(
      this.createForm.controls['latitudeP1'].dirty &&
      this.createForm.controls['latitudeP1'].errors
    );
  }

  getSecteurs(secteur: SecteurCredential[]) {
    this.modalSecteur = !this.modalSecteur;
    this.siteSecteur = secteur;
    console.log(secteur);
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
      this.createForm.controls['averageRout'].value,
      this.createForm.controls['averageHeight'].value,
      this.nbSecteur,
      this.createForm.controls['latitudeP1'].value,
      this.createForm.controls['longitudeP1'].value,
      this.createForm.controls['latitudeP2'].value,
      this.createForm.controls['longitudeP2'].value,
      this.createForm.controls['reseau4g'].value,
      this.createForm.controls['water'].value,
      this.createForm.controls['toilette'].value,
      this.createForm.controls['river'].value,
      this.siteSecteur
    );

    this.siteService.create(credentials).subscribe({
      next: data => {
        this.validateTaost = true;
        this.validateMessage = 'Site enregisté';
        setTimeout(() => {
          this.router.navigate(['/user/site/detail/' + data.id]);
        }, 3000);
      },
      error: err => {
        console.log(err);
      },
    });
  }

  addSecteur($event: any) {
    $event.preventDefault();
    console.log('modale');
    this.modalSecteur = !this.modalSecteur;
  }
}
