import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Countries=[{"code":"IN","name":"India"},{"code":"US","name":"United States"},{"code":"CN","name":"Canada"},{"code":"Aus","name":"Australia"}];
  register={

  }
 registerUser(){
   console.log(this.register);
 }
 submitForm(form:any){
   console.log(form);
 }

}


  
  