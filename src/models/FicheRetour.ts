import { Guid } from "./Guid";
import { Produit } from "./Produit";
import { LigneProduit } from "./LigneProduit";
import { DateTime } from "ionic-angular";
import { Voiture } from "./Voiture";
import { Transporteur } from "./Transporteur";
import { Employee } from "./Employee";
import { Client } from "./Client";
import { Fiche } from "./Fiche";
import { User } from "./user";
import { FicheClient } from "./FicheClient";

export class FicheRetour  extends FicheClient {

    public DateRetour : DateTime;

constructor() {
 super();
}
}
