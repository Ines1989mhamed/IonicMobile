import { Guid } from "./Guid";

export class Voiture {

public Id: Guid;
public Designation : string;
public Matricule :string;
constructor() {
    this.Id = Guid.newGuid();
}
}