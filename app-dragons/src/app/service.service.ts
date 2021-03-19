import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { DragonModel } from './dragon-model.model';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  dragonsList = 'https://dragons-397cf-default-rtdb.firebaseio.com/dragons';

  constructor(private http: HttpClient) { }

  getDragon(id:string):Observable<DragonModel[]> {
    return this.http.get<DragonModel[]>(`${this.dragonsList}/${id}/.json`).pipe(
      map(a => { console.log("dragons:", a); return a })
    )
  }

    getDragons():Observable<DragonModel[]> {
      return this.http.get<DragonModel[]>(this.dragonsList + "/.json").pipe(
        map(dragons => Object.values(dragons)),
        map(a => { console.log("dragons:", a); return a })
      )
    }

    adddragon(dragon: DragonModel): Observable<any> {

      return this.http.post<DragonModel>(`${this.dragonsList}/.json`, dragon).pipe(
        switchMap(ref => {
          dragon.id = ref.name; // clé créée par Firebase lors de l'ajout d'un album
  
          return this.http.put<void>(`${this.dragonsList}/${ref.name}/.json`, dragon);
        }),
        // ref c'est id créé par Firebase pour le nouvel album
      )
    }
    delete(id: string): Observable<any> {
      return this.http.delete<any>(`${this.dragonsList}/${id}/.json`)
    }
    updateDragon(dragon: DragonModel): Observable<DragonModel> {

      return this.http.put<DragonModel>(`${this.dragonsList}/${dragon.id}/.json`, dragon);
    }
}

