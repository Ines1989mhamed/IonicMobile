import { Guid } from "./Guid";

export class Evennement {

public Id: Guid;
public Designation: string;
 
constructor() {
    this.Id = Guid.newGuid();
}
}
 