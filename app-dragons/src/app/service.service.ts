import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  dragonsList = 'https://dragons-397cf-default-rtdb.firebaseio.com/Dragons';

  constructor(private http: HttpClient) { }

  getAlbumsFirebase(): Observable<any> {

    return this.http.get(this.dragonsList + '/.json').pipe(
      map(a => { console.log(a); return a })
    )

  }
}
