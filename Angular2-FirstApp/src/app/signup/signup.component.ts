import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {LookupService} from '../services/lookup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Countries=[{"code":"IN","name":"India"},{"code":"US","name":"United States"},{"code":"CN","name":"Canada"},{"code":"Aus","name":"Australia"}];
  register={ };
  constructor(rb:FormBuilder,public lookupService:LookupService) { 
    this.registerForm=rb.group({
      'firstName':["Shivani",Validators.maxLength(10)],
      'lastName':["Jagadala",Validators.minLength(10)],
      'email' : [null, Validators.required],
      'password': [null, Validators.required],
      
    })

}

  ngOnInit() {
  }
  
 registerUser(){
   console.log(this.register);
 }
 submitForm(form:any){
   console.log(form);
 }
 registerForm:FormGroup
}


  
  