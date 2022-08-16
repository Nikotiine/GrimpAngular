export interface ICategorie {
  approchTypeList: approchType[];
  directionsList: direction[];
  equipmentList: equipment[];
  levelList: level[];
  rockTypeList: rockType[];
  routProfilList: routProfil[];
  equipmentQualityList: equipmentQuality[];
  averageRoutNumberList: averageRout[];
}
export interface approchType {
  idApprochType: number;
  type: string;
}
export interface direction {
  idDirections: number;
  direction: string;
}
export interface equipment {
  idEquipment: number;
  libelle: string;
}
export interface level {
  idLevel: number;
  designation: string;
}
export interface rockType {
  idRockType: number;
  type: string;
}
export interface routProfil {
  idRoutProfil: number;
  profil: string;
}
export interface equipmentQuality {
  idEquipmentQuality: number;
  quality: string;
}
export interface averageRout {
  idAverageRoutNumber: number;
  libelle: string;
}
