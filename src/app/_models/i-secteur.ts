export interface ISecteur {
  idSecteur?: number;
  name: string;
}
export class SecteurCredential implements ISecteur {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
