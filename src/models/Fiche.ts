import { Guid } from "./Guid";

import { LigneProduit } from "./LigneProduit";
import { DateTime } from "ionic-angular";

import { Transporteur } from "./Transporteur";
import { Voiture } from "./Voiture";
import { User } from "./User";
export class Fiche {

public Id: Guid;
public Num_Fiche : number;
public LignesProduits: Array<LigneProduit> = new Array<LigneProduit>();
public Voiture :Voiture = new Voiture();
public Transporteur :Transporteur = new Transporteur() ;
public Employees :String;
public Num_Ligne: number;
public User : User = new User();
public DateFiche : DateTime;

constructor() {
    this.Id = Guid.newGuid();
}
}
