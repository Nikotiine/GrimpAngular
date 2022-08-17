import { ISecteur } from './i-secteur';
import {
  approchType,
  averageRout,
  direction,
  equipment,
  equipmentQuality,
  level,
  rockType,
  routProfil,
} from './i-categorie';

export interface ISite {
  idSpot: number;
  name: string;
  approachTime: number;
  averageHeight: number;
  nbSecteur: number;
  latitudeP1: number;
  longitudeP1: number;
  latitudeP2: number;
  longitudeP2: number;
  reseau4g: boolean;
  water: boolean;
  toilette: boolean;
  river: boolean;
  minimumLevel: level;
  maximumLevel: level;
  approchType: approchType;
  direction: direction;
  equipment: equipment;
  equipmentQuality: equipmentQuality;
  rockType: rockType;
  routProfil: routProfil;
  averageRoutNumber: averageRout;
}
export interface ISiteCredential {
  name: string;
  idMinimumLevel: number;
  idMaximumLevel: number;
  approachTime: number;
  idApproachType: number;
  idEquipment: number;
  idEquimentQuality: number;
  idDirection: number;
  idRockType: number;
  idRoutProfil: number;
  idAverageRout: number;
  averageHeight: number;
  nbSecteur: number;
  latitudeP1: number;
  longitudeP1: number;
  latitudeP2?: number;
  longitudeP2?: number;
  reseau4g: boolean;
  water: boolean;
  toilette: boolean;
  river: boolean;
  secteurs: ISecteur[];
}
export class SiteCredential implements ISiteCredential {
  name: string = '';
  idMinimumLevel: number = 0;
  idMaximumLevel: number = 0;
  approachTime: number = 0;
  idApproachType: number = 0;
  idEquipment: number = 0;
  idEquimentQuality: number = 0;
  idDirection: number = 0;
  idRockType: number = 0;
  idRoutProfil: number = 0;
  idAverageRout: number = 0;
  averageHeight: number = 0;
  nbSecteur: number = 0;
  latitudeP1: number = 0;
  longitudeP1: number = 0;
  latitudeP2: number = 0;
  longitudeP2: number = 0;
  reseau4g: boolean = false;
  water: boolean = false;
  toilette: boolean = false;
  river: boolean = false;
  secteurs: ISecteur[] = [];

  constructor(
    name: string,
    minimumLevel: number,
    maximumLevel: number,
    approachTime: number,
    approachType: number,
    equipment: number,
    equimentQuality: number,
    direction: number,
    rockType: number,
    routProfil: number,
    averageRout: number,
    averageHeight: number,
    nbSecteur: number,
    latitudeP1: number,
    longitudeP1: number,
    latitudeP2: number,
    longitudeP2: number,
    reseau4g: boolean,
    water: boolean,
    toilette: boolean,
    river: boolean,
    secteurs: ISecteur[]
  ) {
    this.name = name;
    this.idMinimumLevel = minimumLevel;
    this.idMaximumLevel = maximumLevel;
    this.approachTime = approachTime;
    this.idApproachType = approachType;
    this.idEquipment = equipment;
    this.idEquimentQuality = equimentQuality;
    this.idDirection = direction;
    this.idRockType = rockType;
    this.idRoutProfil = routProfil;
    this.idAverageRout = averageRout;
    this.averageHeight = averageHeight;
    this.nbSecteur = nbSecteur;
    this.latitudeP1 = latitudeP1;
    this.longitudeP1 = longitudeP1;
    this.latitudeP2 = latitudeP2;
    this.longitudeP2 = longitudeP2;
    this.reseau4g = reseau4g;
    this.water = water;
    this.toilette = toilette;
    this.river = river;
    this.secteurs = secteurs;
  }
}
