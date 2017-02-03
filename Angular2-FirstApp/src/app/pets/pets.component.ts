import { Component, OnInit } from '@angular/core';
import { LookupService } from '../services/lookup.service'; 
declare var firebase: any; // here we are creating a firebase instance of the firebase database


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],

})
export class PetsComponent implements OnInit {

  petsData=[];
  newPetsData={};

// function get data from DB
  fbGetData(){

    firebase.database().ref('/').on('child_added', (snapshot) =>{  //here we use the firebase instance to access the database and ref method to get the snapshot of the collection and also the snapshot of if any new child(data)is added to the collection
      
      this.petsData.push(snapshot.val())   // here we are pushing the snapshot obj to the petsdata array

    })
  }
// function to post data to DB
   fbPostData(newPetsData){

     console.log(newPetsData);
     firebase.database().ref('/').push(newPetsData);

   }
  constructor(private fetch: LookupService){ }
 

  ngOnInit() {

     // this.fetch.fetchPetData().subscribe( (data) => this.petsData = data ); //here we are accessing the lookup service method (fetchPetData) on initializing our component and we subscribe to its observable to access the response as data and return it a petsDAta (if its the current object)
     this.fbGetData(); // we call the func on init
    }

  }


