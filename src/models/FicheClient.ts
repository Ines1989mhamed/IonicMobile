import { Fiche } from "./Fiche";
import { Client } from "./Client";

export class FicheClient extends Fiche{

    Client : Client = new Client();
    
constructor(){
    super();
}
}