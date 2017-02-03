import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx'; // if you want to use any observale methods you need to import it here
import 'rxjs/add/operator/map';

@Injectable()       

export class LookupService {

  // log(){

  //   alert("You have logged  your first service");
  // }

  constructor(private http: Http) { }

  //create a function to perfomr ajax call to get pet data

  fetchPetData(){

    return this.http.get('https://petdata-f9787.firebaseio.com/.json').map( 
      (res) => res.json()
      
      ); // here we are using an observable -response which has observable operators (another observable to catch data) map
    
  }

}
