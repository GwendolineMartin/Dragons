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

  constructor(private firestore: AngularFirestore) { }

    getDragon() {
      return this.firestore.collection('Dragons').snapshotChanges(); 
    }

    createDragon(dragon: DragonModel){
        return this.firestore.collection('Dragons').add(dragon);
    }

    updateDragon(dragon: DragonModel){
      delete dragon.name;
      this.firestore.doc('Dragons/' + dragon.name).update(dragon);
    }

    deleteDragon(dragonName: string){
      this.firestore.doc('Dragons/' + dragonName).delete();
    }
}
