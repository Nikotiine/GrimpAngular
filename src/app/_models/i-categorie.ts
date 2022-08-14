export interface ICategorie {
  approchTypeList: approchType[];
  directionsList: direction[];
  equipmentList: equipment[];
  levelList: level[];
  rockTypeList: rockType[];
  routProfilList: routProfil[];
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
  idDRoutProfil: number;
  profil: string;
}
