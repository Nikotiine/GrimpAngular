export interface ISite {
  name: string;
}
export interface ISiteCredential {
  name: string;
  minimumLevel: number;
  maximumLevel: number;
  approachTime: number;
  approachType: number;
  equipment: number;
  equimentQuality: number;
  direction: number;
  rockType: number;
  routProfil: number;
  averageRout: number;
  nbSecteur: number;
  latitudeP1: number;
  longitudeP1: number;
  latitudeP2?: number;
  longitudeP2?: number;
  reseau4g: boolean;
  water: boolean;
  toilette: boolean;
  river: boolean;
}
export class SiteCredential implements ISiteCredential {
  name: string = '';
  minimumLevel: number = 0;
  maximumLevel: number = 0;
  approachTime: number = 0;
  approachType: number = 0;
  equipment: number = 0;
  equimentQuality: number = 0;
  direction: number = 0;
  rockType: number = 0;
  routProfil: number = 0;
  averageRout: number = 0;
  nbSecteur: number = 0;
  latitudeP1: number = 0;
  longitudeP1: number = 0;
  latitudeP2: number = 0;
  longitudeP2: number = 0;
  reseau4g: boolean = false;
  water: boolean = false;
  toilette: boolean = false;
  river: boolean = false;

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
    nbSecteur: number,
    latitudeP1: number,
    longitudeP1: number,
    latitudeP2: number,
    longitudeP2: number,
    reseau4g: boolean,
    water: boolean,
    toilette: boolean,
    river: boolean
  ) {
    this.name = name;
    this.minimumLevel = minimumLevel;
    this.maximumLevel = maximumLevel;
    this.approachTime = approachTime;
    this.approachType = approachType;
    this.equipment = equipment;
    this.equimentQuality = equimentQuality;
    this.direction = direction;
    this.rockType = rockType;
    this.routProfil = routProfil;
    this.averageRout = averageRout;
    this.nbSecteur = nbSecteur;
    this.latitudeP1 = latitudeP1;
    this.longitudeP1 = longitudeP1;
    this.latitudeP2 = latitudeP2;
    this.longitudeP2 = longitudeP2;
    this.reseau4g = reseau4g;
    this.water = water;
    this.toilette = toilette;
    this.river = river;
  }
}
