import { Guid } from "./Guid";

export class Personne {

public Id: Guid;
public Nom : string;
public Adresse : string;
public Tel : string;
constructor() {
    this.Id = Guid.newGuid();
}
}
