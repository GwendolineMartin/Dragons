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

  dragonsList = 'https://dragons-397cf-default-rtdb.firebaseio.com/Dragons';

  constructor(private http: HttpClient) { }

    getDragon():Observable<DragonModel[]> {
      return this.http.get<DragonModel[]>(this.dragonsList + '/.json')
    }
}
