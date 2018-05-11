import { Guid } from "./Guid";

import { LigneProduit } from "./LigneProduit";
import { DateTime } from "ionic-angular";

import { Employee } from "./Employee";
import { Client } from "./Client";
import { User } from "../models/User";

export class Reservation {
    public Id: string;
    public DateDeb : DateTime;
    public DateFin : DateTime;
    public LignesProduits: Array<LigneProduit> = new Array<LigneProduit>();
    public Client: Client;
    public Employee : User;
}