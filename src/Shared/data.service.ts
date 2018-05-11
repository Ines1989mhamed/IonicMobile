import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Fiche } from '../models/Fiche';
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FicheRetour } from '../models/FicheRetour';
import { FicheSortie } from '../models/FicheSortie';

@Injectable()
export class DataService {

  apiRoot = 'http://localhost:5000/api';
  results: Array<any>;
  loading: boolean;

  constructor(private http: Http) {
    this.results = new Array<any>();
    this.loading = false;
   }
   collapseFiches(item) {

   }
   uriBuilder(api: string): string {
     return `${this.apiRoot}/${api}`;
   }
   getFiches(FicheType: string): Observable<Array<Fiche>> {
      // tslint:disable-next-line:prefer-const
      let apiURL = this.uriBuilder(FicheType);
      return this.http.get(apiURL)
          .map(
              res => { 
                 let results = res.json().map(item => {
                  let fiche = new Fiche();
                  fiche.Id = item.id;
                  fiche.Num_Fiche = item.designation;
                  return fiche;
                });
                  return results;
              },
          );   
  }

  getFichesSortie(){
    return this.getFiches('FichesSorties');
  }
  getFichesEntree(){
    return this.getFiches('FicheEntrees');
  }
  getFichesRetour(){
    return this.getFiches('FichesRetours');
  }

  addFiche(data: Fiche, FicheType : string): any {
    let url = this.uriBuilder(FicheType);
    let dataToSend = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, dataToSend, options)
       .map((response: Response) => {
       return response.json();
      });
  }
  addFicheRetour(data: FicheRetour) : any  { 
    let ficheType : string = "FichesRetours";
    this.addFiche(data, ficheType); 
  }
  addFicheSortie(data: FicheSortie) : any { 
    let ficheType : string = "FichesSorties";
    this.addFiche(data, ficheType); 
  }
}
